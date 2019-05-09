import { Component, OnInit } from '@angular/core';
import { transaction } from '../models/transactions';
import { TransactionsService } from '../services/transactions.service';

@Component({
  selector: 'app-all-transaction',
  templateUrl: './all-transaction.component.html',
  styleUrls: ['./all-transaction.component.css']
})
export class AllTransactionComponent implements OnInit {

 assets: transaction[];

 constructor(private transactionService: TransactionsService) { }

  ngOnInit(): void {
    this.getAssets();
   
  }

  getAssets(){
     return this.transactionService.getAllTransactions()
    .subscribe(
      assets => {
       this.assets = assets;
      }
     );    
  }


}
