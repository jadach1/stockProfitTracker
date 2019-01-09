import { Component, OnInit } from '@angular/core';
import { currentAssets } from '../currentAssets';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-current-assets',
  templateUrl: './current-assets.component.html',
  styleUrls: ['./current-assets.component.css']
})
export class CurrentAssetsComponent implements OnInit {

  assets: currentAssets[];
  constructor(private assetService: AssetService) { }

  ngOnInit(): void {
    this.getAssets();
  }

  getAssets(){
    return this.assetService.getCurrentAssets()
    .subscribe(
      assets => {
       console.log(assets);
       this.assets = assets
      }
     );
  }
}
