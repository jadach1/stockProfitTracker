import { Component, OnInit } from '@angular/core';
import { transaction } from '../transactions';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-all-transaction',
  templateUrl: './all-transaction.component.html',
  styleUrls: ['./all-transaction.component.css']
})
export class AllTransactionComponent implements OnInit {

  assets: transaction[];
  constructor(private assetService: AssetService) { }

  ngOnInit(): void {
    this.getAssets();
    
  }

  getAssets(){
    return this.assetService.getAllTransctions()
    .subscribe(
      assets => {
       console.log(assets);
       this.assets = assets
      }
     );
  }

}
