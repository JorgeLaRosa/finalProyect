// Modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module'
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Componentes
import { AlumnosListComponent } from './admin/components/alumnos-list/alumnos-list.component';

import { CursosComponent } from './students/components/cursos/cursos.component';
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
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from './state/app.state';



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
    CoreModule,
    SharedModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production, name: "NGRX TEST" })

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
