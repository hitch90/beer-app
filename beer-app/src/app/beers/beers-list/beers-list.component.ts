import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {BeerService} from '../../services/beer.service';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.scss']
})
export class BeersListComponent implements OnInit {
  @Input() brewers;
  selectedBrewer = new FormControl();
  filteredOptions: Observable<any[]>;
  page = 1;
  beers;

  constructor(
    private beerService: BeerService
  ) {}

  ngOnInit() {
    this.filteredOptions = this.selectedBrewer.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.brewers.slice()))
    );
  }

  displayFn(brewer?: any): string | undefined {
    return brewer ? brewer.name : undefined;
  }
  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.brewers.filter(
      option => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }


  getBeers(e) {
    this.beerService.getByBrewer(e.name, this.page).subscribe(data => {
      console.log(data);
      this.beers = data;
    });
  }
}
