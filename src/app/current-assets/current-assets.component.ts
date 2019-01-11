import { Component, OnInit } from '@angular/core';
import { transaction } from '../transactions';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-current-assets',
  templateUrl: './current-assets.component.html',
  styleUrls: ['./current-assets.component.css']
})
export class CurrentAssetsComponent implements OnInit {

  assets: transaction[];
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

  checkTransaction(): void{
    alert("i am on it");
   // document.getElementById("talberow").style.background="red";
   // document.getElementById("tablerow").style.color="white";
  }
}
