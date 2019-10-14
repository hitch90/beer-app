import {
  Injectable,
  HttpService,
} from '@nestjs/common';
import {map} from 'rxjs/operators';

@Injectable()
export class BrewerService {
  constructor(private readonly httpService: HttpService) {}

  async findAll() {
    return this.httpService.get('http://ontariobeerapi.ca/beers').pipe(
      map(response => response.data),
      map(data => {
        const brewer = [];
        for (let i of data) {
          brewer.push({ name: i.brewer });
        }
        return brewer.map(e => e['name'])
            .map((e, i, final) => final.indexOf(e) === i && i)
            .filter(e => brewer[e]).map(e => brewer[e]);

      }),
    );
  }

  //
  //
  // findOne(id: number): Promise<any> {
  //   return this.cityRepository.findOne(id, { relations: ['country'] });
  // }
}
