import { Component, OnInit } from '@angular/core';
import { asset } from '../asset';
import { AssetService } from '../asset.service';
import { promise } from 'protractor';

@Component({
  selector: 'app-current-assets',
  templateUrl: './current-assets.component.html',
  styleUrls: ['./current-assets.component.css']
})
export class CurrentAssetsComponent implements OnInit {

  assets: asset[];
  totOut: number = 0;
  totIn: number = 0;
  currTotal: number = 0;
  orgMoney: number = 0;
  test:number =200;
  constructor(private assetService: AssetService) { }
 

  ngOnInit(): void {
   this.getAssets(); 
  }

  getAssets(){
    return this.assetService.getAllAssets()
    .subscribe(
      thisCanBeAnything => {
       this.assets = thisCanBeAnything;
       this.calculate(this.assets);
      }
     );
  }

  calculate(myAssets: asset[]){
    myAssets.forEach(element => {
      this.totOut += (element.totalMoneyOut * 1);
      this.totIn += (element.totalMoneyIn * 1);
      this.currTotal += (element.currentTotal * 1);
      this.orgMoney += (element.originalMoney * 1);
    });
     
  
   
  }
}
