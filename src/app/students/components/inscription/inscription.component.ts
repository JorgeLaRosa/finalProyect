import { Component, OnInit } from '@angular/core';
import { SchoolZoomService } from 'src/app/core/services/school-zoom.service';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscriptionForm!: FormGroup;
  courses: any[] = [];
  students: any[] = [];

  constructor(private fireService: SchoolZoomService, fb: FormBuilder) {
    this.inscriptionForm = new FormGroup({
      courseId: new FormControl(''),
      studentId: new FormControl('')
    });
  }

  newRegister() {
    this.fireService.newRegister(this.inscriptionForm.value);
    console.log(this.inscriptionForm.value)
    //aca agregar alert que doga que estas inscripto
  }

  ngOnInit(): void {
    this.fireService.getCourses().subscribe((data) => {
      this.courses = [];
      data.forEach((i) => this.courses.push(
        {
          id: i.payload.doc.id,
          ...i.payload.doc.data()
        }
      ))
    })

    this.fireService.obtenerStudents().subscribe((data) => {
      this.students = [];
      data.forEach((i) => this.students.push(
        {
          id: i.payload.doc.id,
          ...i.payload.doc.data()
        }
      ))
    })
  }

}
