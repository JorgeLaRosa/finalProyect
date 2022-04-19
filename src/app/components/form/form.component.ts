import { Component, OnInit, Inject } from '@angular/core';
import { SchoolServicesService } from '../../services/school-services.service';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  newStudent: any = {}
  student: any = ""
  formulario!: FormGroup;
  mode!: boolean;


  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<FormComponent>, @Inject(MAT_DIALOG_DATA) data: any) {

    this.formulario = this.fb.group({
      dni: new FormControl(data.dni),
      nombre: new FormControl(data.nombre),
      curso: new FormControl(data.curso),

    });



  }

  ngOnInit(): void {
  }

  sumar() {
    this.dialogRef.close()
  }


}
