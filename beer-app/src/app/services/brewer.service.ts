import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrewerService {
  constructor(private http: HttpClient) {}

  getBrewers() {
    return this.http.get(`${environment.api_url}/brewer/all`);
  }
}
