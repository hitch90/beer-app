import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  optionsModal = false;
  constructor() { }

  ngOnInit() {
  }

  showOptions() {
    this.optionsModal = !this.optionsModal;
  }
}
