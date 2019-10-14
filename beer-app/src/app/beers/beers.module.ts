import { NgModule } from '@angular/core';
import { BeersComponent } from './beers.component';
import { BeersRoutingModule } from './beers-routing.module';
import { BeersListComponent } from './beers-list/beers-list.component';


@NgModule({
  imports: [
    BeersRoutingModule,
  ],
  declarations: [
    BeersComponent,
    BeersListComponent,
  ],
  exports: [
    BeersComponent
  ],

})
export class BeersModule {

}
