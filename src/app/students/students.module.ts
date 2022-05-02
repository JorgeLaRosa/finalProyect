import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { SharedModule } from '../shared/shared.module';

import { CursosComponent } from './components/cursos/cursos.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { StudentsComponent } from './students.component';


@NgModule({
  declarations: [
    StudentsComponent,
    CursosComponent,
    InscriptionComponent,
    StudentProfileComponent,

  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule
  ],
  exports: [
    SharedModule
  ]
})
export class StudentsModule { }
