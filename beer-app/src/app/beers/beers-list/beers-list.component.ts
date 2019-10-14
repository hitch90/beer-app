import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.scss']
})
export class BeersListComponent implements OnInit {
  @Input() brewers;
  @Output() selectBrewer: EventEmitter<any> = new EventEmitter();
  selectedBrewer = new FormControl();
  filteredOptions: Observable<any[]>;

  constructor() {}

  ngOnInit() {
    this.filteredOptions = this.selectedBrewer.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.brewers.slice()))
    );
  }
  onChange() {
    this.selectBrewer.emit(this.selectedBrewer);
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
}
