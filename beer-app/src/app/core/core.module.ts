import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {
  MatButtonModule,
  MatIconModule, MatSelectModule,
  MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';
import { LightboxComponent } from './lightbox/lightbox.component';
import { OptionsComponent } from './options/options.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,

    MatSlideToggleModule
  ],
  declarations: [HeaderComponent, LightboxComponent, OptionsComponent],
  exports: [HeaderComponent, LightboxComponent],
  providers: []
})
export class CoreModule {}
