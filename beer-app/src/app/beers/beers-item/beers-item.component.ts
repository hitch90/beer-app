import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-beers-item',
  templateUrl: './beers-item.component.html',
  styleUrls: ['./beers-item.component.scss']
})
export class BeersItemComponent implements OnInit {
  @Input() beer;
  openPreview = false;
  constructor() { }

  ngOnInit() {
  }

  onOpenPreview() {
    this.openPreview = true;
  }

  onClosePreview() {
    this.openPreview = false;
  }

}
