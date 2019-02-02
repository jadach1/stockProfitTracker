import { Component, OnInit, Input } from '@angular/core';
import { transaction } from '../transactions';
import { asset } from '../asset';
import { AssetService } from '../asset.service';
import { TransactionsService } from '../transactions.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.css']
})
export class AssetDetailsComponent implements OnInit {
  myAsset = new asset();
  transactions: transaction[];
  test: number = 0;

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
            value => { alert("successfully pulled asset"), this.myAsset = value}, 
            error =>  { alert("This symbol does not exist") }
              );      
  }

  private check(newPrice:number): void {
    
   
   new Promise(res=>{
    alert("number passed in " + newPrice)
    this.myAsset.price = newPrice;
    return res();
   }).then(res=>{
     this.myAsset.currentTotal = this.myAsset.price * this.myAsset.shares;
   }).then(res => {
     this.assetService.updateAsset(this.myAsset).subscribe(res=> alert("updated asset successfully"), err => alert("failed to update asset") )
   }).catch(err =>{
      alert("error inside function check " + err)
   })
  
  
  }

}
