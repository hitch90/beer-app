import { NgModule } from '@angular/core';
import { BeersComponent } from './beers.component';
import { BeersRoutingModule } from './beers-routing.module';
import { BeersListComponent } from './beers-list/beers-list.component';
import {
  MatAutocompleteModule, MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BeersItemComponent } from './beers-item/beers-item.component';
import {ImagePreloadDirective} from '../core/directives/image-preload.directive';
import {CoreModule} from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatOptionModule,
    MatButtonModule,
    BeersRoutingModule,
    CoreModule
  ],
  declarations: [BeersComponent, BeersListComponent, BeersItemComponent, ImagePreloadDirective],
  exports: [BeersComponent]
})
export class BeersModule {}
