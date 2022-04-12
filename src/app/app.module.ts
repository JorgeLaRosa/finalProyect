import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { FormComponent } from './components/form/form.component';
import { SchoolServicesService } from './services/school-services.service';
import { AlumnosListComponent } from './components/alumnos-list/alumnos-list.component';
import { HeadersSizeDirective } from './directives/headers-size.directive';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SidebarComponent,
    ToolbarComponent,
    AlumnosListComponent,
    HeadersSizeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SchoolServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
