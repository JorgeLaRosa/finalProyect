import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormComponent } from './components/form/form.component';
import { AdminComponent } from './admin.component';
import { CoursesCreatorComponent } from './components/courses-creator/courses-creator.component';
import { AlumnosListComponent } from './components/alumnos-list/alumnos-list.component';
import { CompartidoComponent } from '../shared/compartido/compartido.component';


@NgModule({
  declarations: [
    FormComponent,
    AdminComponent,
    CoursesCreatorComponent,
    AlumnosListComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
