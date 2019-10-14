import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class BeerService {
  constructor(private readonly httpService: HttpService) {}

  findAll() {
    return 'beer';
  }
  async findByBrewer(brewer) {
    return this.httpService.get('http://ontariobeerapi.ca/beers').pipe(
      map(response => response.data),
      map(data => {
        return data.filter(item => {
          return item.brewer == brewer;
        });
      }),
    );
  }
}
