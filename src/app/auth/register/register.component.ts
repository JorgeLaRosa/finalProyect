import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { SchoolZoomService } from 'src/app/core/services/school-zoom.service';
import { User } from 'src/app/models/user.interface';
import { AppState } from 'src/app/state/app.state';
import { sessionSelector } from 'src/app/state/selectors/login.selector';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formulario!: FormGroup;
  buttonLabel: string = "Enviar";
  titleLabel: string = "Nuevo Registro"
  editValue!: boolean;
  isAdminValue!: boolean;

  constructor(
    private fb: FormBuilder,
    private fireService: SchoolZoomService,
    @Inject(MAT_DIALOG_DATA) data: User,
    private store: Store<AppState>
  ) {

    this.store.select(sessionSelector).subscribe(state => {
      this.isAdminValue = state.currentUser.isAdmin;
    })

    console.log(data);
    this.formulario = this.fb.group({
      id: data.id,
      name: new FormControl(data.name, Validators.required),
      lastName: new FormControl(data.lastName, Validators.required),
      dni: new FormControl(data.dni, Validators.required),
      courses: [data.courses],
      mail: new FormControl(data.mail, Validators.required),
      password: new FormControl(data.password, Validators.required),
      isAdmin: new FormControl(data.isAdmin, Validators.required)
    })
    this.editValue = data.edit;
  }

  ngOnInit() {
    this.checkValue()
  }

  checkValue() {
    if (this.editValue === true) {
      this.buttonLabel = "Editar";
      this.titleLabel = "Editar Usuario"
    }
  }

  enviarForm() {
    //console.log(this.formulario.value)
    if (this.editValue == true) {
      this.fireService.updateStudent(this.formulario.value)
    } else {
      this.fireService.createNewStudent(this.formulario.value)
    }
  }

}
