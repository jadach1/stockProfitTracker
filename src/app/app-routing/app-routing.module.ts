import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CurrentAssetsComponent  } from '../current-assets/current-assets.component';
import { AddTransactionComponent } from '../add-transaction/add-transaction.component';
import { AllTransactionComponent } from '../all-transaction/all-transaction.component';
import { AssetDetailsComponent   } from '../asset-details/asset-details.component';
import { ContributionsComponent  } from '../contributions/contributions.component';

const routes: Routes = [
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
    path: 'contributions', 
    component: ContributionsComponent 
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
