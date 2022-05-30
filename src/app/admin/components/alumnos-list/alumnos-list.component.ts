import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SchoolZoomService } from '../../../core/services/school-zoom.service';
import { MatTable } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
//import { FormComponent } from '../form/form.component';
import { RegisterComponent } from 'src/app/auth/register/register.component';

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
    "lastName",
    "curso",
    "eliminar",
    "editar",
    "isAdmin"
  ];
  //dataSource es la fuente del Mat Table
  dataSource = this.alumnos;


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

  deleteStudent(studentId: string) {
    this.studentsService.deleteSelectedStudent(studentId)
  }

  actualizar(dialogData: any) {
    this.studentsService.updateStudent(dialogData)
    this.table?.renderRows()


  }

  abrirDialogEditar(editValue: boolean, element: any) {
    this.dialog.open(RegisterComponent, {
      width: '400px',
      data: {
        name: element.name,
        lastName: element.lastName,
        dni: element.dni,
        courses: element.courses,
        mail: element.mail,
        id: element.id,
        password: element.password,
        edit: true,
        isAdmin: false
      }
    });


  }

  abrirDialogCrear() {
    this.dialog.open(RegisterComponent, {
      width: '400px',
      data: {
        name: '',
        lastName: '',
        dni: '',
        mail: '',
        password: '',
        courses: '',
        edit: false,
        isAdmin: false,
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


