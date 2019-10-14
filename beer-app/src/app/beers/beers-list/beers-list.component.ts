import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { BeerService } from '../../services/beer.service';

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
  beers;

  constructor(private beerService: BeerService) {}

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

  getBeers(e) {
    localStorage.setItem(`brewer${this.index}`, e.name);
    this.beerService.getByBrewer(e.name).subscribe(data => {
      this.pages = Math.ceil(data.length / 15);
      this.currentPage = 1;
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
