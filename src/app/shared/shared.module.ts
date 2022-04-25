import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HeadersSizeDirective } from './directives/headers-size.directive';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MaterialModule,
    HeadersSizeDirective,
  ]
})
export class SharedModule { }
