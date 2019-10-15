import { NgModule } from '@angular/core';
import { BeersComponent } from './beers.component';
import { BeersRoutingModule } from './beers-routing.module';
import { BeersListComponent } from './beers-list/beers-list.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatProgressBarModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BeersItemComponent } from './beers-item/beers-item.component';
import { ImagePreloadDirective } from '../core/directives/image-preload.directive';
import { CoreModule } from '../core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatOptionModule,
    MatButtonModule,
    BeersRoutingModule,
    BrowserAnimationsModule,
    CoreModule
  ],
  declarations: [
    BeersComponent,
    BeersListComponent,
    BeersItemComponent,
    ImagePreloadDirective
  ],
  exports: [BeersComponent]
})
export class BeersModule {}
