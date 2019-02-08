import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { asset } from './asset';
import {map} from 'rxjs/operators';
import { Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  private Url = 'http://localhost:8080/api/';  // URL to web api

  constructor(private http: HttpClient) { }

  // Return a single asset from the database table assets
  getAsset(symbol: string): Observable<asset> {
    const url = `${this.Url + 'currentassets'}/${symbol}`;
    let existingAsset = new asset();
    //return this.http.get<asset>(this.Url+'currentassets'+'/'+symbol);
    return this.http.get<asset>(url);
  }

  // return all assets from the database table assets
  getAllAssets (): Observable<asset[]> {
    return this.http.get<asset[]>(this.Url+'currentassets')
  }

  // create an asset
  createAsset(asset: asset): Observable<asset> {
    return this.http.post<asset>(this.Url+'currentassets', asset, httpOptions);
  }

  // update an asset in database
  updateAsset (asset: asset): Observable<any> {
    return this.http.put(this.Url+'currentassets', asset, httpOptions);
  }

  // This will take a number like 111111.00 and convert it into 111,111.00
  formatNumber (asset: asset) {
    alert("converting");
   // asset.avgprice = asset.avgprice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

    return asset;
    
  }

  // this function is not working right now, trying to play around with parsing json from server
  checkIfExist(name: string) {
    let checker;
  
    const url = `${this.Url + 'currentassets/checkIfExist'}/${name}`;
    checker = this.http.get<any>(url)
            .pipe(
              map(data => data.expires)
            )
            return checker;
  }
}
