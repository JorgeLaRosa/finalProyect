import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './students/components/cursos/cursos.component';
import { AlumnosListComponent } from './admin/components/alumnos-list/alumnos-list.component';
import { InscriptionComponent } from 'src/app/students/components/inscription/inscription.component';
import { CoursesCreatorComponent } from 'src/app/admin/components/courses-creator/courses-creator.component';
import { StudentProfileComponent } from './students/components/student-profile/student-profile.component';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)

  },
  {
    path: "alumnos",
    loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)
  },
  {
    path: "login", loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
