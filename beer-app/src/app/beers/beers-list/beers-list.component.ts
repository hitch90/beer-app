import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BeerService } from '../../services/beer.service';
import {SettingsService} from '../../services/settings.service';

interface IBeer {
  name: string;
  type: string;
  price: number;
  image_url: string;
}

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.scss']
})
export class BeersListComponent implements OnInit {
  @Input() brewers = [];
  @Input() index: number;
  selectedBrewer = new FormControl();
  filteredOptions: Observable<any[]>;
  currentPage = 1;
  pages = 1;
  beers: IBeer[];
  loading = false;
  settings: any[] = [];
  settings$: Subscription;
  perPage = 15;
  sortBy = 'name';

  constructor(private beerService: BeerService, private settingsService: SettingsService) {
    this.settings$ = this.settingsService.getSettings().subscribe(settings => {
      if (settings) {
        this.perPage = settings.perPage;
        this.sortBy = settings.sortBy;
      } else {
        this.settings = [];
      }
    });
  }

  ngOnInit() {
    this.loadFromStorage();
    this.filteredOptions = this.selectedBrewer.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.brewers.slice()))
    );
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.brewers.filter(
      option => option.name.toLowerCase().indexOf(filterValue) === 0
    );
  }

  displayFn(brewer?: any): string | undefined {
    return brewer ? brewer.name : undefined;
  }

  onChange(e) {
    this.getBeers(e.option.value);
  }

  getBeers(e) {
    const { name } = e;
    this.beers = [];
    this.pages = 1;
    this.currentPage = 1;
    this.loading = true;
    localStorage.setItem(`brewer${this.index}`, name);
    this.beerService.getByBrewer(name, this.sortBy).subscribe(data => {
      this.loading = false;
      this.pages = Math.ceil(data.length / this.perPage);
      this.beers = data;
    });
  }

  loadFromStorage() {
    const fromStorage = localStorage.getItem(`brewer${this.index}`);
    if (fromStorage && fromStorage !== 'undefined') {
      this.selectedBrewer.patchValue({
        name: fromStorage
      });
      this.getBeers(this.selectedBrewer.value);
    }
  }

  nextPage(e) {
    e.preventDefault();
    this.currentPage += 1;
  }
}
