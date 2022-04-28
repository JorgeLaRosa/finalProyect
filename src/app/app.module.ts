// Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module'
import { AppRoutingModule } from './core/app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Componentes
import { AlumnosListComponent } from './components/alumnos-list/alumnos-list.component';

import { CursosComponent } from './components/cursos/cursos.component';
import { FormComponent } from './components/form/form.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CoursesCreatorComponent } from './components/courses-creator/courses-creator.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { SchoolZoomService } from './core/services/school-zoom.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SidebarComponent,
    ToolbarComponent,
    AlumnosListComponent,
    CursosComponent,
    CoursesCreatorComponent,
    InscriptionComponent,
    StudentProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
