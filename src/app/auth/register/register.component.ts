import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  ngOnInit() { }


  // newStudent: any = {}
  // student: any = ""
  // formulario!: FormGroup;
  // buttonLabel!: any;
  // id!: string

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

  // ngOnInit(): void {
  // }

  // sendForm() {
  //   this.dialogRef.close(this.formulario.value)
  // }

}
