import { Component, OnInit } from '@angular/core';
import { asset } from '../asset';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-current-assets',
  templateUrl: './current-assets.component.html',
  styleUrls: ['./current-assets.component.css']
})
export class CurrentAssetsComponent implements OnInit {

  assets: asset[];
  constructor(private assetService: AssetService) { }
  total;

  ngOnInit(): void {
    this.getAssets();
    
  }

  getAssets(){
    return this.assetService.getAllAssets()
    .subscribe(
      thisCanBeAnything => {
       this.assets = thisCanBeAnything
      }
     );
  }

  
}
