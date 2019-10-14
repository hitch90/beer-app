import { Component, OnInit } from '@angular/core';
import { BrewerService } from '../services/brewer.service';
import {Observable} from 'rxjs';
import {BeerService} from '../services/beer.service';


@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {
  brewers$: Observable<any>;
  constructor(private brewerService: BrewerService, private beerService: BeerService) {}

  ngOnInit() {
    this.brewerService.getBrewers().subscribe(data => {
      console.log(data)
    });
    this.brewers$ = this.brewerService.getBrewers();
  }

}
