import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from '../components/cursos/cursos.component';
import { AlumnosListComponent } from '../components/alumnos-list/alumnos-list.component';
import { InscriptionComponent } from 'src/app/components/inscription/inscription.component';
import { CoursesCreatorComponent } from 'src/app/components/courses-creator/courses-creator.component';
import { StudentProfileComponent } from '../components/student-profile/student-profile.component';


const routes: Routes = [

  { path: "cursos", component: CursosComponent },
  {
    path: "alumnos", component: AlumnosListComponent
    // loadChildren: () => import('../alumnos/alumnos.module').then(m => m.AlumnosModule)
  },
  { path: "inscripcion", component: InscriptionComponent },
  { path: "courseCreator", component: CoursesCreatorComponent },
  { path: "studentProfile", component: StudentProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
