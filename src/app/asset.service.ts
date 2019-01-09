import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { currentAssets } from './currentAssets';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  private customersUrl = 'http://localhost:8080/api/currentassets';  // URL to web api

  constructor(private http: HttpClient) { }

  getCurrentAssets (): Observable<currentAssets[]> {
    return this.http.get<currentAssets[]>(this.customersUrl)
  }

  addAsset (asset: currentAssets): Observable<currentAssets> {
    return this.http.post<currentAssets>(this.customersUrl, asset, httpOptions);
  }
}
