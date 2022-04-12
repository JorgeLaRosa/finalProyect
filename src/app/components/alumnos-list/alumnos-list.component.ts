import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SchoolServicesService } from '../../services/school-services.service';
import { MatTable } from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { compileNgModuleDeclarationExpression } from '@angular/compiler/src/render3/r3_module_compiler';


export interface Student {
  name: string;
  dni: number;
  curso: string;
}

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css']
})

export class AlumnosListComponent implements OnInit {

  @ViewChild('tabla') table?: MatTable<Student>

  alumnos: any[] = [];

  displayedColumns: string[] = [
    "dni",
    "nombre",
    "curso",
    "eliminar",
    "editar"
  ]

  newStudent: any = {}

  student: any = ""

  formulario: FormGroup = new FormGroup({
    dni: new FormControl('', [Validators.required, Validators.minLength(8)]),
    nombre: new FormControl('', [Validators.required]),
    curso: new FormControl('', [Validators.required]),
  });

  newForm: FormGroup = new FormGroup({
    dni: new FormControl('', [Validators.required, Validators.minLength(8)]),
    nombre: new FormControl('', [Validators.required]),
    curso: new FormControl('', [Validators.required]),
  })

  constructor(private students: SchoolServicesService) {
    this.alumnos = this.students.retornar()
  }

  estilos: any = {
    tamano: '20px'
  }

  dataSource = this.alumnos;

  eliminar(dni: any) {
    this.students.borrar(dni);
    this.table?.renderRows();
  }

  sumar() {
    console.log(this.formulario.value)
    this.students.agregar(this.formulario.value)
    this.table?.renderRows();
  }

  editar(curso: any) {
    this.newForm.setValue({
      dni: curso.dni,
      nombre: curso.nombre,
      curso: curso.curso
    })

  }

  actualizar() {
    this.students.modificar(this.newForm.value)
    this.table?.renderRows()
  }

  ngOnInit(): void {
  }
}


