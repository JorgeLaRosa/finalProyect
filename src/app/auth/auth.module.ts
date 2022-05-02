import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from '../admin/components/form/form.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [

    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,

  ],
  exports: [

  ]

})
export class AuthModule { }


