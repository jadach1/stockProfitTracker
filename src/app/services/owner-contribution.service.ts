import { Injectable }              from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable }              from 'rxjs';
import { owners }                  from '../models/owner';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class OwnerContributionService {

  private Url = 'http://localhost:8080/api/';  // URL to web api

  constructor(private http: HttpClient) { }

  // Return all owners
  getOwners(symbol: string): Observable<owners> {
    const url = this.Url + 'owners';
    return this.http.get<owners>(url);
  }

   // create an owner
   createOwner(owner: owners): Observable<owners> {
     console.log("in side " + this.Url+'owners')
    return this.http.post<owners>(this.Url+'owners', owner, httpOptions);
  }
}
