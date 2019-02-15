import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { CurrentAssetsComponent } from './current-assets/current-assets.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { AllTransactionComponent } from './all-transaction/all-transaction.component';
import { AssetDetailsComponent } from './asset-details/asset-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrentAssetsComponent,
    AddTransactionComponent,
    AllTransactionComponent,
    AssetDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
