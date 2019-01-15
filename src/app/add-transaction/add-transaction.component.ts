import { Component, OnInit } from '@angular/core';
import { transaction } from '../transactions';
import { AssetService } from '../asset.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent  implements OnInit{

  Asset = new transaction();
  submitted = false;

  // upon initialization set the transaction to true/buy and the colors to green
  ngOnInit()
  {
    this.Asset.transaction = true;
    document.getElementById("symbol").style.background="rgb(76, 243, 76)";
    document.getElementById("shares").style.background="rgb(76, 243, 76)";
    document.getElementById("price").style.background="rgb(76, 243, 76)";
    document.getElementById("buydate").style.background="rgb(76, 243, 76)";
    document.getElementById("symbol").style.color="white";
    document.getElementById("shares").style.color="white";
    document.getElementById("price").style.color="white";
    document.getElementById("buydate").style.color="white";
  }

  constructor(
    private assetService: AssetService,
    private location: Location,
  ) { }

  // Change the trasnaction from buy to sell or vice versa, change colors of input fields
  setTransaction(value: boolean): void {
    this.Asset.transaction = value;

    if ( value === true )
    {
      document.getElementById("symbol").style.background="rgb(76, 243, 76)";
      document.getElementById("shares").style.background="rgb(76, 243, 76)";
      document.getElementById("price").style.background="rgb(76, 243, 76)";
      document.getElementById("buydate").style.background="rgb(76, 243, 76)";
    }
    else
    {
      document.getElementById("symbol").style.background="rgb(253, 65, 65)";
      document.getElementById("shares").style.background="rgb(253, 65, 65)";
      document.getElementById("price").style.background="rgb(253, 65, 65)";
      document.getElementById("buydate").style.background="rgb(253, 65, 65)";
    }
  }

  // new form, reset the state excep for the transaction state we will keep that the same
  newAsset(): void {
    this.submitted = false;
    this.Asset = new transaction();
    
    if ( this.Asset.transaction == true )
    {
      this.setTransaction(true);
    }
    else
    {
      this.setTransaction(false);
    }  
  }

 // set the submitted variable to true so we can view the hidden aspects in the form;
 // calculate the total for the asset and call the save function
 addAsset() {
   this.submitted = true;
   this.Asset.total = this.Asset.shares * this.Asset.price;
   this.save();
 }

  goBack(): void {
    this.location.back();
  }

  // call function in service injection and show all paramteres being passed buy the user
  private save(): void {
    this.assetService.addAsset(this.Asset)
        .subscribe();
  }

}
