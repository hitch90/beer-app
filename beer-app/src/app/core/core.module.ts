import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [RouterModule, CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
  declarations: [ HeaderComponent ],
  exports: [HeaderComponent],
  providers: []
})
export class CoreModule {}
