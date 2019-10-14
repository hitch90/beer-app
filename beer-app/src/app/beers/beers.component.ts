import { Component, OnInit } from '@angular/core';
import { BrewerService } from '../services/brewer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {
  brewers$: Observable<any>;
  constructor(private brewerService: BrewerService) {}

  ngOnInit() {
    this.brewers$ = this.brewerService.getBrewers();
  }
}
