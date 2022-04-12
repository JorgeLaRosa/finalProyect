import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchoolServicesService {
  public students: any[] = [
    { dni: 23843999, nombre: "Edgardo", curso: "angular" },
    { dni: 42665443, nombre: "Gimena", curso: "React " },
    { dni: 32445544, nombre: "Hector", curso: "vue" }

  ]
  retornar() {
    return (this.students)
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



  constructor() { }
}
