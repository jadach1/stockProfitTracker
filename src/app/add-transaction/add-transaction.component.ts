import { Component, OnInit } from '@angular/core';
import { transaction } from '../transactions';
import { asset } from '../asset';
import { AssetService } from '../asset.service';
import { TransactionsService } from '../transactions.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent  implements OnInit{

  Transaction = new transaction();
  submitted = false;
  newAsset = new asset();

  // upon initialization set the transaction to true/buy and the colors to green
  ngOnInit()
  {
      this.Transaction.transaction = true;
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
    private transactionService: TransactionsService,
    private location: Location,
  ) { }

  // Change the trasnaction from buy to sell or vice versa, change colors of input fields
  setTransaction(value: boolean): void {
    this.Transaction.transaction = value;
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
  newTransaction(): void {
    const saveTransaction = this.Transaction.transaction;
    this.Transaction = new transaction();
    this.newAsset = new asset();
    if ( saveTransaction === true ) {
      this.setTransaction(true);
      }
    else  {
      this.setTransaction(false);
      } 
    this.submitted = false;
  }

 // set the submitted variable to true so we can view the hidden aspects in the form;
 // calculate the total for the asset and call the save function
 // start the process to update the existing or new asset this transaction belongs too
 addTransaction(currentTransaction: transaction) {
   this.Transaction.total = this.Transaction.shares * this.Transaction.price;
   if (this.Transaction.symbol.length > 6 )
   {
      alert("Error:  Symbol must be less than 6 characters long")
   }else {
      this.createAsset(this.Transaction.symbol);
   }
 }

// Create the asset we are adding a transaction for,
// If the asset fails to create it means it is already in the database, 
// in either case we will call the grabAsset function to get it ready to update new trasnaction details
private createAsset(symbol : string): void{
  this.newAsset.symbol = symbol;
  alert("creating asset " + symbol);
  this.assetService.createAsset(this.newAsset)
    .subscribe( 
                value => {  alert("success, asset created"); this.grabAsset(symbol); },
                error => {  alert("asset already exsists");  this.grabAsset(symbol);          }
                );
}

  // This function will grab the asset with the symbolName from the database and call the updateAsset functio, 
  // or return an error
  private grabAsset(symbolName: string): void{
      this.assetService.getAsset(symbolName)
        .subscribe(value => { alert("successfully pulled asset"), 
                              this.newAsset = value,
                              // update asset we grabbed with transaction details
                              this.updateExistingAsset(this.newAsset, this.Transaction, this.assetService,this.transactionService) }, 
                   error =>  { alert("This symbol does not exist") }
                  );           
}

  // This takes 5 arguments and updates the asset in the database with the transaction recorded
  // depending on whether it is a buy or a sell order we will increase/decrease the totals
  private updateExistingAsset(assetToUpdate : asset, currentTransaction : transaction,
                               currentAssetService : AssetService, 
                              currentTransactionService : TransactionsService): void {   
      // Because some calculations rely on others to complete first, we will execute these in a nested promise
      new Promise( function(resolve, reject) { 
            // Check to see if price is more than 2 decimal places and alert user it will be truncated if it is
            var regexp = /^\d+\.\d{0,2}$/;
            if ( !regexp.test(currentTransaction.price.toString()) )
            {
              alert("Your price has more than 2 decimal places, please be aware it will be rounded down upon execution")
            }
            var regexp2 = /^\d{8}$/;
            if ( regexp2.test(currentTransaction.shares.toString()) )
            {
              throw("The number of shares you are trying to purchase exceeds 8 digits")
            }
            // Check to see whether this is a buy(true) or sell(false) and act accordingly
            if (currentTransaction.transaction === true )
            {
              assetToUpdate.shares += currentTransaction.shares;
              //assetToUpdate.totalMoneyIn += currentTransaction.total;
              assetToUpdate.totalMoneyIn += currentTransaction.total;
              alert("total = " + currentTransaction.total + " new total " + assetToUpdate.totalMoneyIn)
            }
            else {
              assetToUpdate.shares -= currentTransaction.shares;
              assetToUpdate.totalMoneyOut += currentTransaction.total;
            }
            return resolve(assetToUpdate.totalMoneyIn);
      }).then(res=> { 
            // check and throw an error if this order will push shares below 0
            if ( assetToUpdate.shares < 0 )
            {
              throw ("Sorry, you do not have enough shares to fill this order");
            }
            // check to make sure the shares we are trying to buy are a whole number
            if ( !Number.isInteger(assetToUpdate.shares) )
            {
              throw ("The number of shares entered is NOT a whole number");
            }
            assetToUpdate.originalMoney = assetToUpdate.totalMoneyIn - assetToUpdate.totalMoneyOut;
            return assetToUpdate.originalMoney;
      }).then(res=> { 
            // If originalMoney is less than 0, change the value to 0, means "we are in the money"
            if (assetToUpdate.originalMoney < 0 )
            {
              assetToUpdate.originalMoney = 0;
            }
            // Only calculate avgprice if shares and originalMoney are over 0.
            if (assetToUpdate.shares > 0 && assetToUpdate.originalMoney > 0)
            {
              assetToUpdate.avgprice = assetToUpdate.originalMoney / assetToUpdate.shares;
            } else {
              assetToUpdate.avgprice = 0;
            }
            return assetToUpdate.avgprice;
      }).then(res=>{
            // Call the function to update our existing asset with the new one in the database, or return an error
            currentAssetService.updateAsset(assetToUpdate)
            .subscribe(
                success => {alert("updated asset successfully"), this.submitted = true},
                error   => {throw "Failed to update asset" }
            );
            return "result";  
      }).then(res=>{
            // If we have made it up to this point then it is safe to save the transaction as well.
            currentTransactionService.addTransaction(currentTransaction)
            .subscribe();
            // And we can also set the submit variable to true, indicating a successful transaction
            
      }).catch(error=>{
            // Catch any errors that occur
            alert("error occured: " + error);
      });

  }
  
  goBack(): void {
    this.location.back();
  }
}
