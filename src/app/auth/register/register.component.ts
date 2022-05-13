import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newStudent: any = {}
  student: any = ""
  formulario!: FormGroup;
  buttonLabel: string = "Enviar";
  id!: string

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      dni: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      curso: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      contrasena: new FormControl('', Validators.required),
      isAdmin: false,
    })
  }

  ngOnInit() { }

  //constructor(    
  //public dialogRef: MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) data: any) {

  //ButtonValue
  //   if (data.mode == true) {
  //     this.buttonLabel = "Editar"
  //   } else {
  //     this.buttonLabel = "Inscribirse"
  //   }
  // }

  sendForm() {
    // this.dialogRef.close(this.formulario.value)
  }

}
