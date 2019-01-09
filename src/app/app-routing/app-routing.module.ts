import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';

import { CurrentAssetsComponent } from '../current-assets/current-assets.component';
import { AddCurrentAssetComponent } from '../add-current-asset/add-current-asset.component';

const routes: Routes = [
   { 
     path: 'customers', 
     component: CustomerComponent 
   },
   { 
     path: 'customer/add', 
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
    path: 'currentAssets/add', 
    component: AddCurrentAssetComponent 
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