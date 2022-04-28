import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { StudentProfileComponent } from '../components/student-profile/student-profile.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'perfilAlumno', component: StudentProfileComponent },
      { path: '**', redirectTo: 'inicioProf' },
    ]
  }]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AlumnosRoutingModule { }
