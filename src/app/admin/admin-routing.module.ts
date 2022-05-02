import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AlumnosListComponent } from './components/alumnos-list/alumnos-list.component';
import { CoursesCreatorComponent } from './components/courses-creator/courses-creator.component';


const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'cursosCreator', component: CoursesCreatorComponent },
      { path: 'listaUsuarios', component: AlumnosListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
