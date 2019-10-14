import { NgModule } from '@angular/core';
import { BeersComponent } from './beers.component';
import { BeersRoutingModule } from './beers-routing.module';
import { BeersListComponent } from './beers-list/beers-list.component';
import {
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BeersItemComponent } from './beers-item/beers-item.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatOptionModule,
    BeersRoutingModule
  ],
  declarations: [BeersComponent, BeersListComponent, BeersItemComponent],
  exports: [BeersComponent]
})
export class BeersModule {}
