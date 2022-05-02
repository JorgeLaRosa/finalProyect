import { Component, OnInit, Inject } from '@angular/core';
import { SchoolServicesService } from '../../../core/services/school-services.service';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  // newStudent: any = {}
  // student: any = ""
  // formulario!: FormGroup;
  // buttonLabel!: any;
  // id!: string

  constructor() { }
  // constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) data: any) {

  //   this.formulario = this.fb.group({
  //     dni: new FormControl(data.dni),
  //     name: new FormControl(data.name),
  //     lastName: new FormControl(data.lastName),
  //     curso: new FormControl(data.curso),
  //     phone: new FormControl(data.phone),
  //     isAdmin: false,
  //   });


  //   //ButtonValue
  //   if (data.mode == true) {
  //     this.buttonLabel = "Editar"
  //   } else {
  //     this.buttonLabel = "Inscribirse"
  //   }
  // }

  ngOnInit(): void {
  }

  // sendForm() {
  //   this.dialogRef.close(this.formulario.value)
  // }


}
