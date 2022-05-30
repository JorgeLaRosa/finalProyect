import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SchoolZoomService } from '../../../core/services/school-zoom.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-courses-creator',
  templateUrl: './courses-creator.component.html',
  styleUrls: ['./courses-creator.component.css']
})
export class CoursesCreatorComponent implements OnInit {
  newCourse!: any[];
  newCourseForm!: FormGroup;
  //coursesObservable: Observable<any[]>;
  editValue!: boolean;

  constructor(private coursesService: SchoolZoomService, @Inject(MAT_DIALOG_DATA) data: any, private fb: FormBuilder) {
    this.newCourseForm = this.fb.group({
      id: data.id,
      title: new FormControl(data.title, Validators.required),
      subtitle: new FormControl(data.subtitle, Validators.required),
      duration: new FormControl(data.duration, Validators.required),
      price: new FormControl(data.duration, Validators.required),
      description: new FormControl(data.description, Validators.required),
      enrolledStudents: new FormControl(data.enrrolledStudents),
      maxQuotes: new FormControl(data.maxQuotes, Validators.required)
    })
    this.editValue = data.edit
  }

  ngOnInit(): void {
  }

  createNewCourse() {
    if (this.editValue == false) {
      this.coursesService.updateSelectedCourse(this.newCourseForm.value);


    } else {
      this.coursesService.createNewCourse(this.newCourseForm.value);

    }
  }




}
