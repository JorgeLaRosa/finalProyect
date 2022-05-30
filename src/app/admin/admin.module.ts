import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AdminComponent } from './admin.component';
import { CoursesCreatorComponent } from './components/courses-creator/courses-creator.component';
import { AlumnosListComponent } from './components/alumnos-list/alumnos-list.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';


@NgModule({
  declarations: [
    AdminComponent,
    CoursesCreatorComponent,
    AlumnosListComponent,
    CoursesListComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
