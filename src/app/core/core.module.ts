import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SchoolZoomService } from './services/school-zoom.service';
import { AngularFirestoreModule, } from '@angular/fire/compat/firestore'
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { AuthModule } from '../auth/auth.module';
import { LoginComponent } from '../auth/login/login.component';
import { HomeModule } from '../home/home.module';
import { HomeComponent } from '../home/components/home/home.component';

import { StudentsModule } from '../students/students.module';
import { AdminModule } from '../admin/admin.module';





@NgModule({
  declarations: [
  ],
  imports: [
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    CommonModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    StudentsModule,
    AdminModule
  ],
  exports: [
    SharedModule,
  ],
  providers: [
    SchoolZoomService
  ]
})
export class CoreModule { }
