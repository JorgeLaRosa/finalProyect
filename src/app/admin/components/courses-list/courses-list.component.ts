import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { SchoolZoomService } from 'src/app/core/services/school-zoom.service';
import { Courses } from 'src/app/models/courses';
import { loadCourses, loadedCourses } from 'src/app/state/actions/courses.action';
import { AppState } from 'src/app/state/app.state';
import { coursesSelector } from 'src/app/state/selectors/courses.selector';
import { CoursesCreatorComponent } from '../courses-creator/courses-creator.component';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  @ViewChild('tabla') table?: MatTable<any>

  isLoading = false;
  displayedColumns: string[] = [
    "Nombre",
    "Subtitle",
    "Duracion",
    "Precio",
    "Eliminar",
    "Editar"
  ]
  coursesSubscription!: Subscription;
  courses: any[] = []
  dataSource = this.courses;

  constructor(private store: Store<AppState>,
    private fireService: SchoolZoomService,
    public dialog: MatDialog

  ) {
    this.store.dispatch(loadCourses())
    this.store.select(coursesSelector).subscribe(state => {
      this.isLoading = state.loading;
    });
    this.coursesSubscription = this.fireService.getCourses().subscribe((data) => {
      this.courses = [];
      data.forEach(i => {
        this.courses.push({
          id: i.payload.doc.id,
          ...i.payload.doc.data()
        })
      })
    })
    this.store.dispatch(loadedCourses({ courses: this.courses }))
    this.setCoursesData()
    //console.log(this.dataSource)
  }

  setCoursesData() {
    this.store.select(coursesSelector).subscribe(state => {
      this.courses = state.courses

    })
  }

  deleteCourse(id: string) {
    this.fireService.deleteSelectedCourse(id);
  }

  editCourse(courseData: any) {
    this.dialog.open(CoursesCreatorComponent, {
      width: '400px',
      data: { ...courseData, edit: false }
    })
  }

  createNewCourse() {
    this.dialog.open(CoursesCreatorComponent, {
      width: '400px',
      data: {
        title: '',
        subtitle: '',
        duration: '',
        price: '',
        description: '',
        enrolledStudents: '',
        maxQuotes: '',
        edit: true
      }
    })
  }

  ngOnInit(): void {
  }

}
