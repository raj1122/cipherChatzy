import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../shared/layout/footer/footer.component';
import { HeaderComponent } from '../shared/layout/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  declarations: [
    FooterComponent,
    HeaderComponent

  ]
})
export class LayoutModule { }
