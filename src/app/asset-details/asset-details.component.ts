import { Component, OnInit, Input } from '@angular/core';
import { transaction }              from '../transactions';
import { asset }                    from '../asset';
import { assetDisplay }             from '../assetDisplay'
import { AssetService }             from '../asset.service';
import { TransactionsService }      from '../transactions.service';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.css']
})
export class AssetDetailsComponent implements OnInit {
  myAsset        = new asset();
  displayedAsset = new assetDisplay();
  transactions:     transaction[];
  newPrice:         number = 0;
  // what if scenario below
  whatIfPrice:      number;
  totalMoneyOut:    number;
  pureProfit:       number;
  pureProfitMargin: number;
  sharesToSell:     number;

  constructor( 
    private assetService: AssetService,
    private transactionService: TransactionsService,
    private location: Location,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
   this.grabAssetAndConvert();
  }

  private grabAssetAndConvert(): void {
     // Fetch our asset from DB and convert the numbers into strings
     this.assetService.getAsset( this.route.snapshot.paramMap.get('symbol'))
     .subscribe(
                value => { // upon success, set value and call function to convert  
                        this.myAsset = value, 
                        this.convert()
                      }, 
                error => alert("This symbol does not exist"),
                () => this.displayTransactions("all") 
              );      
  }

  // convert number and decimals like 1111.42 into 1,111.00
  private convert(): void {
    this.displayedAsset.avgprice = this.myAsset.avgprice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    this.displayedAsset.avgpriceSold = this.myAsset.avgpriceSold.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    this.displayedAsset.originalMoney = this.myAsset.originalMoney.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    this.displayedAsset.totalMoneyIn = this.myAsset.totalMoneyIn.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    this.displayedAsset.totalMoneyOut = this.myAsset.totalMoneyOut.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    this.displayedAsset.price = this.myAsset.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    this.displayedAsset.currentTotal = this.myAsset.currentTotal.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    this.displayedAsset.realProfit = this.myAsset.realProfit.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    this.displayedAsset.realMargin = this.myAsset.realMargin.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    this.displayedAsset.unRealProfit = this.myAsset.unRealProfit.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    this.displayedAsset.unRealMargin = this.myAsset.unRealMargin.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }

  private updatePrice(newPrice:number): void {
      // This will uodate the current price as well as calculate the currentTotal and other totals.
      new Promise(res=>{
        this.myAsset.price = newPrice;
        return res();
      }).then(res=>{
        this.myAsset.currentTotal = this.myAsset.price * this.myAsset.shares;
      }).then(res=> {
        this.myAsset.realProfit = this.myAsset.totalMoneyOut - this.myAsset.totalMoneyIn;
        // Check to make sure we still have shares left and have not realized a profit
        if (this.myAsset.shares > 0 && this.myAsset.originalMoney > 0)
        {
          this.myAsset.unRealProfit = this.myAsset.totalMoneyOut * 1 + this.myAsset.currentTotal - this.myAsset.totalMoneyIn;
        } 
        // if we have 0 shares and we made a profit than there is no unrealized gain to be made
        else 
        {
          this.myAsset.unRealProfit = 0;
        }
      }).then(res=> {
        this.myAsset.realMargin =   this.myAsset.realProfit / this.myAsset.totalMoneyIn  * 100;
        if (this.myAsset.shares > 0 && this.myAsset.originalMoney > 0)
        {
            this.myAsset.unRealMargin = this.myAsset.unRealProfit / this.myAsset.totalMoneyIn * 100;
        } else {
            this.myAsset.unRealMargin = 0;
        }
      }).then(res => {
        this.assetService.updateAsset(this.myAsset)
        .subscribe(res=> this.grabAssetAndConvert(), err=> alert("failed to update asset"))
      }).catch(err =>{
          alert("error when trying to update Price " + err)
      });
  }

  private displayTransactions(displayType: string): void {
    // alert("calling + " + displayType)
    //Parse the string displayType for displaying all, only bought or only sold transactions
    if(displayType==="all")
    {
      this.transactionService.getTransactionsByAsset("all",this.myAsset.symbol)
      .subscribe(
                  res=> {this.transactions = res,alert("ransaction " + this.transactions[0].symbol)},
                  err=> alert("failed to connect to database"),
                  () => alert("ransaction " + this.transactions[0].symbol)
                );
    }
  }

  private whatIfScenario(): void {
      // We will calculate the prices for the what if scenario
      new Promise(res => {
        // how much money we will get out at the what if price
        this.totalMoneyOut = this.whatIfPrice * this.myAsset.shares;
        return res();
      }).then(res =>{
        // how much profit will we make 
        this.pureProfit = this.totalMoneyOut - this.myAsset.originalMoney;
        return;
      }).then(res =>{
        // calculate profit margin
        this.pureProfitMargin = ( this.pureProfit  / this.myAsset.originalMoney ) * 100
      }).then(res =>{
        // how many shares do we need to sell to get our ORIGINAL MONEY back
        this.sharesToSell = this.myAsset.originalMoney / this.whatIfPrice ;
      })
  }
}
