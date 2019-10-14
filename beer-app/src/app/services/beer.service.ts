import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  constructor(private http: HttpClient) {}

  getByBrewer(brewer, sortBy = 'name') {
    let params = new HttpParams().set('brewer', brewer);
    return this.http.get(`${environment.api_url}/beer`, { params }).pipe(
      map((response: any) =>
        response.sort((a, b) =>
          a[sortBy] > b[sortBy] ? 1 : b[sortBy] > a[sortBy] ? -1 : 0
        )
      )
    );
  }
}
