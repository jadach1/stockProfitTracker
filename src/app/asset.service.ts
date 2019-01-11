import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { transaction } from './transactions';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  private Url = 'http://localhost:8080/api/currentassets';  // URL to web api

  constructor(private http: HttpClient) { }

  getCurrentAssets (): Observable<transaction[]> {
    return this.http.get<transaction[]>(this.Url)
  }

  addAsset (asset: transaction): Observable<transaction> {
    return this.http.post<transaction>(this.Url, asset, httpOptions);
  }
}
