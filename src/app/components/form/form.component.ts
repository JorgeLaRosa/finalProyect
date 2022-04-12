import { Component, OnInit } from '@angular/core';
import { SchoolServicesService } from '../../services/school-services.service';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  newStudent: any = {}
  student: any = ""


  formulario: FormGroup = new FormGroup({
    dni: new FormControl(''),
    nombre: new FormControl(''),
    curso: new FormControl(''),
  });


  constructor(private students: SchoolServicesService) {
  }

  ngOnInit(): void {
  }

  sumar() {
    console.log(this.formulario.value)
    this.students.agregar(this.formulario.value)
  }


}
