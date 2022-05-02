import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { HeadersSizeDirective } from './directives/headers-size.directive';
import { AngularModule } from './angular/angular.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MaterialModule,
    //HeadersSizeDirective,
    AngularModule,
  ]
})
export class SharedModule { }
