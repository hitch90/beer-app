import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BewerService {
  constructor(private http: HttpClient) {}

  getBewers() {
    return this.http.get(environment.api_url).pipe(
      map(item => {
        console.log(item);
        return item;
      })
    );
  }
}
