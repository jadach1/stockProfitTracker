import { Component, OnInit }          from '@angular/core';

// models
import { asset }                      from '../models/asset';
import { archivedTransaction }        from '../models/archivedTransactions';
import { portfolio }                  from '../models/portfolioOverall';
import { owners }                     from '../models/owner';

//services
import { AssetService }               from '../services/asset.service';
import { TransactionsService }        from '../services/transactions.service';
import { OwnerContributionService }   from '../services/owner-contribution.service'


interface report{
  overallOut:      any;
  overallIn:       any;
  overallCurrent:  any;
  overallOrgMoney: any;
}

@Component({
  selector: 'app-current-assets',
  templateUrl: './current-assets.component.html',
  styleUrls: ['./current-assets.component.css']
})

export class CurrentAssetsComponent implements OnInit {

  assets:        asset[];
  assetTransfter = new asset();
  portfolio      = new portfolio();
  reportPrep:    report; // for number calculations
  reportDisp:    report; // for string display
  idNumber:      any;    //for an archived asset
  Owners:        owners[];
  ownersID:      number;
  assetToDelete: number; // store asset symbol if we choose to delete it
  symbolToDel:   string;

  constructor(private assetService: AssetService, 
              private transService: TransactionsService,
              private ownerService: OwnerContributionService ) {}
 

  ngOnInit(): void {
   this.getOwners(); 
  }

  resetOverallBar(){
    this.reportPrep = {
      overallOut: 0,
      overallIn: 0,
      overallCurrent: 0,
      overallOrgMoney: 0
    }

    this.reportDisp = {
      overallOut: "",
      overallIn: "",
      overallCurrent: "",
      overallOrgMoney: ""
    }
  }

  /*
    Fetches all the owners, upon success will load the first owners assets
    through the getAssets function
  */
  getOwners(){
    this.ownerService.getOwners()
    .subscribe(
                res=> this.Owners = res,
                err=>console.log("failure to fetch owners in dashboard"),
                ()  => this.getAssets('existing')
              );
  }

  /*
    The purpose is to fetch all assets associated with a specific owners unique ID.
    In addition, the type parameter passed into the function can specify existing or archived
  */
  getAssets(type: string){
    if(this.ownersID == null){
      try{
          if(this.Owners == null)
            throw "Owners array is empty, no owners found in database, nothing to fetch";
          else {
            this.ownersID = this.Owners[0].id;
          }
        } 
        catch (error) {
          console.log(error)
        }
    } 
    this.resetOverallBar();
    this.assetService.getAllAssetsByOwner(type, this.ownersID)
    .subscribe(
                res => this.assets = res,
                err => console.log("could not fetch assets from database"),
                () => this.loadPage()     
    );
  }

  async loadPage(){
    await this.searchForArchives(); 
    await this.calculateValue();
    await this.twoDecimalPlaces();
    await this.formatToString();
  }

  /* 
    This function will search for any assets which have 0 shares,
    it will then move that asset to the archiveAsset table and
    make additions to the archivedTransactions bridge table,
    finally it will delete that asset for the Assets table
  */
  searchForArchives(){
    this.assets.forEach(element => 
      {
        // If we find an asset with 0 shares
        if ( parseFloat(element.shares) == 0 && element.assettype == "existing" )
        {
          // this.assetTransfter = element;
          this.idNumber = element.id;
          this.assetService.transferToArchive(element.id,"archived")
              .subscribe(
                res => console.log("success transferring asset frome existing to archived"),
                err => console.log("there is an error trying to archive an asset"),
                () =>  this.archiveAsset(element.symbol)
              );
        }
      })
  }

  /* 
    Here we will find every transaction associated with the above asset which we are archiving,
    we will then save the following data into the archiveTransactions table: 
    symbolid from the newly create archived asset
    transactionid: from each occuring transaction
  */
  archiveAsset(symbol: string){
    // grab the ID of the archived asset we just saved
    var transID;
    this.transService.getTransactionsFromArchivedAsset(symbol)
                      .subscribe(
                        res => transID = res,
                         err => console.log("unable to get transaction from archives"),
                        () => this.archiveAsset2(transID, symbol)
                      )
  }

  /*
    We now have the archived asset Id saved in idNumber,
    and we have all the transactions associated with it saved in the transID above,
    we can now save into the bridge archivedTransactions table,
    which will show us every transaction associated with that particular archived asset
  */
  archiveAsset2(listOfIDs, symbol: string){
    let archT = new archivedTransaction();
    archT.archiveSymbolD = this.idNumber; 

    listOfIDs.forEach(element => {
      archT.transactionID = element;
      this.transService.addArchivedTransaction(archT)
        .subscribe(
          res => console.log("created"),
          err => console.log("error creating bridge table for archived data"),
        )
    });

    window.location.reload();
  }

  /*
    Iterate through each of the assets and append the value
  */
  calculateValue(){
    this.assets.forEach(element => 
      {
        this.reportPrep.overallOut      += parseFloat(element.totalMoneyOut);
        this.reportPrep.overallIn       += parseFloat(element.totalMoneyIn);
        this.reportPrep.overallCurrent  += parseFloat(element.currentTotal);
        this.reportPrep.overallOrgMoney += parseFloat(element.originalMoney);
      })
  }

  /*
    Convert to 2 decimcal places
  */
  twoDecimalPlaces(){
    this.reportDisp = {
      overallOut: this.reportPrep.overallOut.toFixed(2),
      overallIn: this.reportPrep.overallIn.toFixed(2),
      overallCurrent: this.reportPrep.overallCurrent.toFixed(2),
      overallOrgMoney: this.reportPrep.overallOrgMoney.toFixed(2)
    }
  }

  /*
    Format so rather than 1111.11 we get $1,111.11
  */
  formatToString(){
    this.reportDisp.overallCurrent  = this.reportDisp.overallCurrent.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    this.reportDisp.overallIn       = this.reportDisp.overallIn.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    this.reportDisp.overallOrgMoney = this.reportDisp.overallOrgMoney.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    this.reportDisp.overallOut      = this.reportDisp.overallOut.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  verifyDelete(id: number, symbol: string) {
    this.assetToDelete = id;
    this.symbolToDel = symbol;
    let modal = document.getElementById("deleteAsset");
    modal.style.display = "block";
  }

  deleteAsset() {
    try{
      if(this.assetToDelete == null )
        throw "Error, trying to delete asset but symbol is unkown";
      else {
        this.assetService.deleteAsset(this.assetToDelete)
        .subscribe(
                    res => console.log("successfully deleted asset"),
                    rej => console.log("Was not able to successfully delete asset " + this.assetToDelete),
                    ()  => this.getAssets('existing')
        );
      }
    } catch(err){
      console.log(err)
    }
  }

  hideModal(){
    this.assetToDelete = 0; // set to 0 in case we accidentally delete the wrong asset
    this.symbolToDel = "";
    let modal = document.getElementById("deleteAsset");
    modal.style.display = "none";
  }
}
