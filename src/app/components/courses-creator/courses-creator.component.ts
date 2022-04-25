import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SchoolZoomService } from '../../core/services/school-zoom.service';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-courses-creator',
  templateUrl: './courses-creator.component.html',
  styleUrls: ['./courses-creator.component.css']
})
export class CoursesCreatorComponent implements OnInit {
  newCourse!: any[];
  newCourseForm!: FormGroup;
  //coursesObservable: Observable<any[]>;

  constructor(private coursesService: SchoolZoomService) {
    this.newCourseForm = new FormGroup({
      title: new FormControl('', Validators.required),
      subtitle: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      enrolledStudents: new FormControl([]),
      maxQuotes: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  createNewCourse() {
    this.coursesService.createNewCourse(this.newCourseForm.value);
  }


}
