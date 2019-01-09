import { Component, OnInit } from '@angular/core';
import { currentAssets } from '../currentAssets';
import { AssetService } from '../asset.service';


import { Location } from '@angular/common';

@Component({
  selector: 'app-add-current-asset',
  templateUrl: './add-current-asset.component.html',
  styleUrls: ['./add-current-asset.component.css']
})
export class AddCurrentAssetComponent  {

  asset = new currentAssets();
  submitted = false;
  
  constructor( private location: Location, private assetServices: AssetService ) { 
    console.log("constructing add asset");
  }



  newAsset(): void {
    this.submitted = false;
    this.asset = new currentAssets();
  }

  addAsset(): void{
    console.log("adding asset");
    this.submitted = true;
     this.save();
  }

  goBack(): void {
    this.location.back();
  }

  private save(): void{
    console.log("saving asset" + this.asset);
    this.assetServices.addAsset(this.asset).subscribe();
  }
}
