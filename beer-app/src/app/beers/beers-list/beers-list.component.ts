import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BeerService } from '../../services/beer.service';
import { SettingsService } from '../../services/settings.service';

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
  settings$: Subscription;
  perPage = 15;
  sortBy = 'name';

  constructor(
    private beerService: BeerService,
    private settingsService: SettingsService
  ) {}

  ngOnInit() {
    this.loadFromStorage();
    this.filteredOptions = this.selectedBrewer.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.brewers.slice()))
    );

    this.settings$ = this.settingsService.getSettings().subscribe(settings => {
      if (settings) {
        const { perPage, sortBy } = settings;
        if (this.perPage != perPage || this.sortBy != sortBy) {
          this.perPage = settings.perPage;
          this.sortBy = settings.sortBy;
          this.getBeers();
        }
      }
    });
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

  onChange() {
    this.getBeers();
  }

  getBeers() {
    this.setDefaults();
    if (this.selectedBrewer.value) {
      const { name } = this.selectedBrewer.value;
      localStorage.setItem(`brewer${this.index}`, name);
      this.beerService.getByBrewer(name, this.sortBy).subscribe(data => {
        this.loading = false;
        this.pages = Math.ceil(data.length / this.perPage);
        this.beers = data;
      });
    }
  }

  setDefaults() {
    this.beers = [];
    this.pages = 1;
    this.currentPage = 1;
    this.loading = true;
    localStorage.setItem(`brewer${this.index}`, '');
  }

  loadFromStorage() {
    const fromStorage = localStorage.getItem(`brewer${this.index}`);
    if (fromStorage && fromStorage !== 'undefined') {
      this.selectedBrewer.patchValue({
        name: fromStorage
      });
      this.getBeers();
    }
  }

  nextPage(e) {
    e.preventDefault();
    this.currentPage += 1;
  }
}
