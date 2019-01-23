import { Component, OnInit } from '@angular/core';
import { transaction } from '../transactions';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-all-transaction',
  templateUrl: './all-transaction.component.html',
  styleUrls: ['./all-transaction.component.css']
})
export class AllTransactionComponent implements OnInit {

 assets: transaction[];
 newAssets = new transaction();

 constructor(private transactionService: TransactionsService) { }

  ngOnInit(): void {
    this.getAssets(function(){

     alert("Test " + this.assets[0]);
    });
    this.getTest();   
  }

  getAssets(callback){
     return this.transactionService.getAllTransactions()
    .subscribe(
      assets => {
       this.assets = assets;
       alert("subrscirbed 2");
       callback();
      }
     );    
  }

    getTest() {
      
    }
}
