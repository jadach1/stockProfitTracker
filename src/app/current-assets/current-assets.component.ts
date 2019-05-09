import { Component, OnInit } from '@angular/core';
import { asset } from '../models/asset';
import { AssetService } from '../services/asset.service';
import { portfolio } from '../models/portfolioOverall';

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

  assets:     asset[];
  portfolio = new portfolio();
  reportPrep: report; // for number calculations
  reportDisp: report; // for string display
  
  constructor(private assetService: AssetService) {
    this.reportPrep = {
      overallOut: 0,
      overallIn: 0,
      overallCurrent: 0,
      overallOrgMoney: 0
    }
   }
 

  ngOnInit(): void {
   this.getAssets(); 
  }

  getAssets(){
    return this.assetService.getAllAssets()
    .subscribe(
                res => this.assets = res,
                err => console.log("could not fetch assets from database"),
                () => this.calculate(this.assets)        
    );
  }

  async calculate(myAssets: asset[]){
    await this.calculateValue();
    await this.twoDecimalPlaces();
    await this.formatToString();
  }

  /*
    Iterate through each of the assets and append the value
  */
  calculateValue(){
    console.log("1st")
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
   console.log("2nd")
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
    console.log("3rd")
    this.reportDisp.overallCurrent  = this.reportDisp.overallCurrent.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    this.reportDisp.overallIn       = this.reportDisp.overallIn.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    this.reportDisp.overallOrgMoney = this.reportDisp.overallOrgMoney.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    this.reportDisp.overallOut      = this.reportDisp.overallOut.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
}
