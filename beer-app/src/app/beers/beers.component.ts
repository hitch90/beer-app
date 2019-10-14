import { Component, OnInit } from '@angular/core';
import { BewerService } from '../services/bewer.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {
  constructor(private bewerService: BewerService) {}

  ngOnInit() {
    this.bewerService.getBewers().subscribe(data => {
      console.log(data);
    });
  }
}
