import { Component, OnInit, Input } from '@angular/core';
import { transaction } from '../transactions';
import { asset } from '../asset';
import { AssetService } from '../asset.service';
import { TransactionsService } from '../transactions.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent  implements OnInit{

  Transaction = new transaction();
  submitted = false;
  assetIsNew = true;
  newAsset = new asset();
  existingAsset = new asset();
  passedInShares: number;
  shareCount: string;

  constructor(
    private assetService: AssetService,
    private transactionService: TransactionsService,
    private location: Location,
    private route: ActivatedRoute,
  ) { }

  // upon initialization set the transaction to true/buy and the colors to green
  ngOnInit()
  {
      // Get any parmaeter passed in from url
      const passedInSymbol =  this.route.snapshot.paramMap.get('symbol');
      this.Transaction.symbol = passedInSymbol;
      this.passedInShares = +this.route.snapshot.paramMap.get('shares');
      if ( this.passedInShares > 0 )
      { this.shareCount = "number of current shares is : "+this.passedInShares;}
      if (passedInSymbol != null)
      {
        this.assetIsNew = false;
      }
      // Set default value to true/buy, and set color scheme for form
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
    this.existingAsset = new asset();
    if ( saveTransaction === true ) {
      this.setTransaction(true);
      }
    else  {
      this.setTransaction(false);
      } 
    this.submitted = false;
    this.assetIsNew = true;
  }

   // This function will grab the asset with the symbolName from the database and call the updateAsset functio, 
  // or return an error
  private grabAsset(symbolName: string): void{
    this.assetService.getAsset(symbolName)
      .subscribe(value => this.existingAsset = value ,
                 error =>  alert("Error connecting to database to grab an asset") , 
                 ()  => this.verifyIfAssetExists()
                );           
}

// Establish if an asset exists or not
 verifyIfAssetExists() {
   
   // validate symbol name
   if (this.Transaction.symbol.length > 6 )
   {
      alert("Error:  Symbol must be less than 6 characters long")
   }else {
     new Promise(res=>{
        // set total
        this.Transaction.total = this.Transaction.shares * this.Transaction.price;
        // start process to check if asset exists by grabbing asset synbol from database
        // check to see if we successfully pulled the asset from the database
        if (this.existingAsset == null)
        {
          // If we reached here it means the asset DOES NOT EXIST 
          if(this.Transaction.transaction === false)
          {
            throw "Error, You cannot have a sell order for an Asset you do not own";
          }
          return res();
        }
        else{
          this.assetIsNew = false;
          return res();
        }
     }).then(res=>{
        if (this.assetIsNew === false)
        {
          // If we successfully grabbed the asset from the database
          this.updateExistingAsset(this.existingAsset, this.Transaction, this.assetService,this.transactionService) 
        } else {
          // If this is a new asset, set the symbol and all params to 0 and pass it
          this.newAsset.symbol = this.Transaction.symbol;
          this.updateExistingAsset(this.newAsset, this.Transaction, this.assetService,this.transactionService) 
        }
     }).catch(err=>{
          alert(err);
     })
   }
 }

  // This takes 5 arguments and updates the asset in the database with the transaction recorded
  // depending on whether it is a buy or a sell order we will increase/decrease the totals
  private updateExistingAsset(assetToUpdate : asset, currentTransaction : transaction,
                               currentAssetService : AssetService, 
                              currentTransactionService : TransactionsService): void {   
      // Because some calculations rely on others to complete first, we will execute these in a nested promise
      new Promise( function(resolve, reject) { 
            // Check to make sure use is not trying to buy over the limit
            var regexp2 = /^\d{7}$/;
            if ( regexp2.test(currentTransaction.shares.toString()) )
            {
              throw("The number of shares you are trying to purchase is too high")
            }
            return resolve();
      }).then(res=>{
            // Check to see whether this is a buy(true) or sell(false) and act accordingly
            if (currentTransaction.transaction === true )
            {
              assetToUpdate.shares += currentTransaction.shares;
              assetToUpdate.totalMoneyIn =   assetToUpdate.totalMoneyIn * 1 +  currentTransaction.total;
            }
            else {
              assetToUpdate.shares -= currentTransaction.shares;
              assetToUpdate.sharesSold += currentTransaction.shares;
              assetToUpdate.totalMoneyOut = assetToUpdate.totalMoneyOut * 1 + currentTransaction.total;
            }
            return ;
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
            return ;
      }).then(res=> {
           // Calculate the Realized and Unrealized profit
            assetToUpdate.realProfit = assetToUpdate.totalMoneyOut - assetToUpdate.totalMoneyIn;
            assetToUpdate.unRealProfit = assetToUpdate.totalMoneyOut * 1 + assetToUpdate.currentTotal * 1 - assetToUpdate.totalMoneyIn;
            return;
      }).then(res=> {
           // Calculate the Realized and Unrealized Margins
            assetToUpdate.realMargin = (assetToUpdate.realProfit / assetToUpdate.totalMoneyIn) * 100;
            assetToUpdate.unRealMargin = (assetToUpdate.unRealProfit / assetToUpdate.totalMoneyIn) * 100;
            return;
       }).then(res=> { 
            // If originalMoney is less than 0, change the value to 0, means "we are in the money"
            if (assetToUpdate.originalMoney < 0 )
            {
              assetToUpdate.originalMoney = 0;
            }
            // Only calculate avgprice if shares and originalMoney are over 0.
            if (assetToUpdate.shares > 0 && assetToUpdate.originalMoney > 0)
            {
              // calculate avgPrices
              if (currentTransaction.transaction === true )
              {
                assetToUpdate.avgprice = assetToUpdate.originalMoney / assetToUpdate.shares;
              } else {
                assetToUpdate.avgpriceSold = 1 * assetToUpdate.totalMoneyOut  / assetToUpdate.sharesSold ;
              } 
            } else {
              // original money is at 0 or less than 0
                assetToUpdate.avgprice = 0;
                assetToUpdate.avgpriceSold = 1 * assetToUpdate.totalMoneyOut  / assetToUpdate.sharesSold ;
                assetToUpdate.unRealProfit = 0;
                assetToUpdate.unRealMargin = 0;
            }
            // set the price to be the user entered transaction price
            assetToUpdate.price = currentTransaction.price;
            return ;         
      }).then(res=>{
          // Calculate current Total 
            assetToUpdate.currentTotal = assetToUpdate.shares * assetToUpdate.price;
      }).then(res=>{
          // if this is NOT a new asset we will call updateAsset, otherwise we will create the new asset
          if (this.assetIsNew === false)
          {
            currentAssetService.updateAsset(assetToUpdate)
            .subscribe(
                success => this.submitted = true,
                error   => {throw"Failed to update asset"}
            )
          } else {
            this.assetService.createAsset(assetToUpdate)
            .subscribe( 
                        value =>   this.submitted = true ,
                        error =>  alert("Could not add this asset !")
                      );
          }
            return ;  
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
