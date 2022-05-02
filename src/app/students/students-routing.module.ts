import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { StudentsComponent } from './students.component';

const routes: Routes = [

  {
    path: '', component: StudentsComponent, children: [
      { path: 'cursos', component: CursosComponent },
      { path: 'perfil', component: StudentProfileComponent },
      { path: 'inscripcion', component: InscriptionComponent }
    ]
    // children: [
    //   { path: 'cursos', component: CursosComponent },
    //   { path: 'inscripcion', component: InscriptionComponent },
    //   { path: 'perfil', component: StudentProfileComponent }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
