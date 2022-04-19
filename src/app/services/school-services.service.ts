import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolServicesService {
  public students: any[] = [
    { userId: 1, dni: 23843999, nombre: "Edgardo", curso: "angular" },
    { userId: 2, dni: 42665443, nombre: "Gimena", curso: "React " },
    { userId: 3, dni: 32445544, nombre: "Hector", curso: "vue" },
    { userId: 4, dni: 43465699, nombre: "GUILLE", curso: "angular" },
    { userId: 5, dni: 42235643, nombre: "Roman", curso: "React " },
    { userId: 6, dni: 32400444, nombre: "JUANJO", curso: "vue" }
  ]

  student$ !: Observable<any>
  studentsPromise !: any;

  constructor() {
    this.student$ = new Observable(suscripcion => {
      suscripcion.next(this.students);
    })

    this.studentsPromise = new Promise((resolve, reject) => {
      if (this.students.length > 0) {
        resolve(this.students)
      } else {
        reject((this.students))
      }
    })
  }




  retornar() {
    return this.studentsPromise
  }

  retornarObservable() {
    return this.student$
  }

  retornarObservableFiltrado() {
    return this.student$.pipe(
      map(i => i.filter((student: { userId: number; }) => student.userId > 2))
    )
  }

  borrar(i: number) {
    for (let o = 0; o < this.students.length; o++) {
      if (i == this.students[o].dni) {
        this.students.splice(o, 1)
        console.log(this.students)
      }
    }
  }

  agregar(newStudent: any) {
    this.students.push(newStudent)
    console.log(this.students)
  }

  modificar(newForm: any) {
    let index = this.students.findIndex(i => i.dni === newForm.dni);
    this.students[index] = newForm;
    console.log(newForm.nombre);
  }




}
