import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.scss']
})
export class LightboxComponent implements OnInit {
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.close.emit();
  }
}
