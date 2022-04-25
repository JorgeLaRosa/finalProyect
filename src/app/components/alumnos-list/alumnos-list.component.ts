import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SchoolZoomService } from '../../core/services/school-zoom.service';
import { MatTable } from '@angular/material/table';
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
    private studentsService: SchoolZoomService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.suscripcion = this.studentsService.obtenerStudents().subscribe(
      (data) => {
        this.alumnosObservable = [];
        data.forEach((i) => {
          this.alumnosObservable.push(
            {
              id: i.payload.doc.id,
              ...i.payload.doc.data()

            })
        })
      })
  }

  createStudent(dialogData: any) {
    this.studentsService.createNewStudent(dialogData);
    this.table?.renderRows();
  }

  deleteStudent(studentId: string) {
    this.studentsService.deleteSelectedStudent(studentId)
  }


  actualizar(dialogData: any) {
    this.studentsService.updateStudent(dialogData)
    this.table?.renderRows()
  }

  abrirDialogEditar(mode: boolean, element: any) {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '400px',
      data: {
        name: element.name,
        dni: element.dni,
        curso: element.curso,
        mode: mode,
        id: element.id
      },

    });

    dialogRef.afterClosed().subscribe(info => {
      this.dialogData = info;
      if (mode == false) {
        this.createStudent(this.dialogData)
      } else {
        this.actualizar(this.dialogData)
      }
    })
  }

  abrirDialogInscripcion() {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '400px',
      data: {
        nombre: '',
        dni: '',
        curso: '',


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


