import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';

import { CurrentAssetsComponent  } from '../current-assets/current-assets.component';
import { AddTransactionComponent } from '../add-transaction/add-transaction.component';
import { AllTransactionComponent } from '../all-transaction/all-transaction.component';
import { AssetDetailsComponent   } from '../asset-details/asset-details.component';

const routes: Routes = [
   { 
     path: 'customers', 
     component: CustomerComponent 
   },
   { 
     path: 'customers/add', 
     component: AddCustomerComponent 
   },
   { 
     path: 'customers/:id', 
     component: CustomerDetailsComponent 
   },
   { 
    path: 'currentAssets', 
    component: CurrentAssetsComponent 
   }, 
   { 
    path: 'currentAssets/:symbol', 
    component: AssetDetailsComponent 
   },
   { 
    path: 'Transactions/history', 
    component: AllTransactionComponent 
   },
   { 
    path: 'Transactions/add/:symbol/:shares', 
    component: AddTransactionComponent 
   },
   { 
    path: 'Transactions/add', 
    component: AddTransactionComponent 
   },
   { 
     path: '', 
     redirectTo: 'currentAssets', 
     pathMatch: 'full'
   }, 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
