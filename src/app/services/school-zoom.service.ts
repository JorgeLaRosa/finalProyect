import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolZoomService {
  public students: any[] = [
    { userId: 1, dni: 23843999, nombre: "Edgardo", curso: "angular" },
    { userId: 2, dni: 42665443, nombre: "Gimena", curso: "React " },
    { userId: 3, dni: 32445544, nombre: "Hector", curso: "vue" },
    { userId: 4, dni: 43465699, nombre: "GUILLE", curso: "angular" },
    { userId: 5, dni: 42235643, nombre: "Roman", curso: "React " },
    { userId: 6, dni: 32400444, nombre: "JUANJO", curso: "vue" }
  ]

  private studentObservable: Observable<any[]>;


  constructor() {
    this.studentObservable = new Observable((suscripcion) => {
      suscripcion.next(this.students);
    })
  }

  obtenerStudents() {
    return this.studentObservable;
  }

  eliminarEstudiante(dni: any) {
    for (let o = 0; o < this.students.length; o++) {
      if (dni == this.students[o].dni) {
        this.students.splice(o, 1)
        console.log(this.students)
      }
    }
  }
}
