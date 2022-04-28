import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SchoolZoomService } from './services/school-zoom.service';
import { AngularFirestoreModule, } from '@angular/fire/compat/firestore'
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    AngularFirestoreModule,
    SharedModule,



  ],
  exports: [
    SharedModule,

  ],
  providers: [
    //SchoolZoomService
  ]
})
export class CoreModule { }
