import { Component, OnInit } from '@angular/core';
import { transaction } from '../transactions';
import { asset } from '../asset';
import { AssetService } from '../asset.service';
import { TransactionsService } from '../transactions.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent  implements OnInit{

  Transaction = new transaction();
  submitted = false;
  newAsset = new asset();

  // upon initialization set the transaction to true/buy and the colors to green
  ngOnInit()
  {
      //this.checkIfAssetExists("A");
      this.Transaction.transaction = true;
      document.getElementById("symbol").style.background="rgb(76, 243, 76)";
      document.getElementById("shares").style.background="rgb(76, 243, 76)";
      document.getElementById("price").style.background="rgb(76, 243, 76)";
      document.getElementById("buydate").style.background="rgb(76, 243, 76)";
      document.getElementById("symbol").style.color="white";
      document.getElementById("shares").style.color="white";
      document.getElementById("price").style.color="white";
      document.getElementById("buydate").style.color="white";
  }

  constructor(
    private assetService: AssetService,
    private transactionService: TransactionsService,
    private location: Location,
  ) { }

  // Change the trasnaction from buy to sell or vice versa, change colors of input fields
  setTransaction(value: boolean): void {
    this.Transaction.transaction = value;
    if ( value === true )
    {
      document.getElementById("symbol").style.background="rgb(76, 243, 76)";
      document.getElementById("shares").style.background="rgb(76, 243, 76)";
      document.getElementById("price").style.background="rgb(76, 243, 76)";
      document.getElementById("buydate").style.background="rgb(76, 243, 76)";
    }
    else
    {
      document.getElementById("symbol").style.background="rgb(253, 65, 65)";
      document.getElementById("shares").style.background="rgb(253, 65, 65)";
      document.getElementById("price").style.background="rgb(253, 65, 65)";
      document.getElementById("buydate").style.background="rgb(253, 65, 65)";
    }
  }

  // new form, reset the state excep for the transaction state we will keep that the same
  newTransaction(): void {
    
    const saveTransaction = this.Transaction.transaction;
    this.Transaction = new transaction();
    this.newAsset = new asset();

    if ( saveTransaction === true ) {
      this.setTransaction(true);
      }
    else  {
      this.setTransaction(false);
      }

    
    this.submitted = false;
  }

 // set the submitted variable to true so we can view the hidden aspects in the form;
 // calculate the total for the asset and call the save function
 addTransaction() {
   this.submitted = true;
   this.Transaction.total = this.Transaction.shares * this.Transaction.price;
   this.createAsset(this.Transaction.symbol);
   this.save();
 }

  goBack(): void {
    this.location.back();
  }

  // This function will check to see if the symbol for the transaction being added alfready exists in the database
  private grabAsset(symbolName: string): void{
      this.assetService.checkIfExist(symbolName)
        .subscribe(value => {
                              this.newAsset = value }, 
                  error =>  {
                                alert("error does not exists symbol ")}
                  );   
}
// Create the asset we are adding a transaction for,
// This will return false if the asset already exists in the database
  private createAsset(symbol : string): void{
    //this.grabAsset(this.Transaction.symbol);
   
    this.newAsset.symbol =  symbol;
    alert("creating asset " + symbol);
    this.assetService.createAsset(this.newAsset)
      .subscribe( 
                  value => {  alert("success, asset created"); this.updateAsset(this.newAsset); },
                  error => {  alert("asset already exsists");  this.grabAsset(symbol);          }
                  );
    //this.updateAsset();
  }
  // create an asset if the symbol for the transction being entered is not already in database
  private updateAsset(assetToUpdate : asset ): void {
    
    // set values for new asset to be passed to service injection, assetService
    assetToUpdate.shares = this.Transaction.shares;
    this.newAsset.total = this.Transaction.total;
    this.newAsset.price = this.newAsset.total / this.newAsset.shares;
   // this.assetService.addAsset(this.newAsset)
   //     .subscribe();
  }

  // call function in service injection and show all paramteres being passed buy the user
  private save(): void {
    this.transactionService.addTransaction(this.Transaction)
        .subscribe();
  }

}
