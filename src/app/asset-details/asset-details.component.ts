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
  myAsset = new asset();
  displayedAsset = new assetDisplay();
  transactions: transaction[];
  newPrice: number = 0;

  constructor( 
    private assetService: AssetService,
    private transactionService: TransactionsService,
    private location: Location,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    // Fetch our asset from DB
      this.assetService.getAsset( this.route.snapshot.paramMap.get('symbol'))
        .subscribe(
            value => { // upon success, set value and call function to convert 
                      alert("successfully pulled asset"), 
                      this.myAsset = value, 
                      this.convert()}, 
            error =>  { alert("This symbol does not exist") }
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
    this.myAsset.realProfit = this.myAsset.totalMoneyOut * 1 - this.myAsset.totalMoneyIn * 1;
    this.myAsset.unRealProfit = (this.myAsset.totalMoneyOut * 1 + this.myAsset.currentTotal) - this.myAsset.totalMoneyIn * 1;
   }).then(res=> {
     this.myAsset.realMargin =   (this.myAsset.realProfit / (this.myAsset.totalMoneyIn * 1)) * 100;
     this.myAsset.unRealMargin = (this.myAsset.unRealProfit / (this.myAsset.totalMoneyIn * 1)) * 100;
   }).then(res => {
     this.assetService.updateAsset(this.myAsset).subscribe(res=> alert("updated asset successfully"), err => alert("failed to update asset") )
   }).then(res=>{
     // we need to convert the totals we just calculated again
     this.convert();
   }).catch(err =>{
      alert("error inside function check " + err)
   })
  
  
  }

}
