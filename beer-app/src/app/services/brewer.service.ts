import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BrewerService {
  constructor(private http: HttpClient) {}

  getBrewers() {
    return this.http.get(`${environment.api_url}/brewer/all`).pipe(
      map((response:any) => response.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))
    );
  }
}
