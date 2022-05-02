// Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module'
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Componentes
import { AlumnosListComponent } from './admin/components/alumnos-list/alumnos-list.component';

import { CursosComponent } from './students/components/cursos/cursos.component';
import { FormComponent } from './admin/components/form/form.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CoursesCreatorComponent } from './admin/components/courses-creator/courses-creator.component';
import { InscriptionComponent } from './students/components/inscription/inscription.component';
import { StudentProfileComponent } from './students/components/student-profile/student-profile.component';
import { SchoolZoomService } from './core/services/school-zoom.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { LoginComponent } from './auth/login/login.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ToolbarComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //ReactiveFormsModule,
    CoreModule,
    SharedModule

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
