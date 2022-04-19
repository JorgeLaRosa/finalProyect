import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SchoolServicesService } from '../../services/school-services.service';
import { MatTable } from '@angular/material/table';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';


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

export class AlumnosListComponent implements OnInit, OnDestroy {

  @ViewChild('tabla') table?: MatTable<Student>

  alumnos: any[] = [];
  dialogData: any;
  alumnosObservable: any[] = [];
  studentsPromise!: Promise<any[]>;
  studentsP!: any[];
  newStudent: any = {};
  student: any = "";
  suscripcion!: Subscription;
  studentsFiltered$!: Observable<any>;
  displayedColumns: string[] = [
    "dni",
    "nombre",
    "curso",
    "eliminar",
    "editar"
  ];
  //dataSource es la fuente del Mat Table
  dataSource = this.alumnos;
  dialogRef: any;


  constructor(
    private studentsService: SchoolServicesService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.suscripcion = this.studentsService.retornarObservable().subscribe({
      next: student => (this.alumnosObservable = student)
    })

    this.studentsFiltered$ = this.studentsService.retornarObservableFiltrado()
    this.studentsFiltered$.subscribe()

    this.studentsPromise = this.studentsService.retornar();
    this.studentsPromise
      .then(i => {
        this.studentsP = i
      })


  }

  eliminar(dni: any) {
    this.studentsService.borrar(dni);
    this.table?.renderRows();
  }



  sumar() {

    console.log("suma uno")
    //   console.log(this.formulario.value)
    //   this.studentsService.agregar(this.formulario.value)
    //   this.table?.renderRows();
  }

  actualizar() {
    console.log("actualiza uno")
    //this.studentsService.modificar(this.newForm.value)
    this.table?.renderRows()
  }

  abrirDialogEditar(mode: boolean, element: any) {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '400px',
      data: {
        nombre: element.nombre,
        dni: element.dni,
        curso: element.curso

      }
    })
    dialogRef.afterClosed().subscribe((info: any) => {
      this.dialogData = info
    })
    console.log(dialogRef)
    // if (mode = true) {
    //   this.sumar()
    // } else {
    //   this.actualizar()
    // }

  }

  //Promise


  abrirDialogInscripcion() {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '400px',
      data: {
        nombre: '',
        dni: '',
        curso: ''
      }
    })
  }

  //estilo de Consigna
  estilos: any = {
    tamano: '20px'
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe()
  }

}


