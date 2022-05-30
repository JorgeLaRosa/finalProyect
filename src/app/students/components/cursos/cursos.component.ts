import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { loadCourses, loadedCourses } from 'src/app/state/actions/courses.action';
import { AppState } from 'src/app/state/app.state';
import { coursesSelector } from 'src/app/state/selectors/courses.selector';
import { SchoolZoomService } from '../../../core/services/school-zoom.service';
import { InscriptionComponent } from '../inscription/inscription.component';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  coursesSubscription!: Subscription;
  courses!: any[];
  isLoading = false;



  constructor(public cursosService: SchoolZoomService, public dialog: MatDialog, private store: Store<AppState>) {
    this.getCoursesData()
  }

  getCoursesData() {
    this.store.dispatch(loadCourses());
    this.store.select(coursesSelector).subscribe(state => {
      this.isLoading = state.loading
    });
    this.coursesSubscription = this.cursosService.getCourses().subscribe((data) => {
      this.courses = [];
      data.forEach(i => {
        this.courses.push({
          id: i.payload.doc.id,
          ...i.payload.doc.data()
        })
      })
    })
    this.store.dispatch(loadedCourses({ courses: this.courses }))
    this.setCoursesData();
  }

  setCoursesData() {
    this.store.select(coursesSelector).subscribe(state => {
      this.courses = state.courses
    })
  }

  ngOnInit(): void {
  }

  newInscription(title: string, courseId: string) {
    console.log(title, courseId)
    const dialogRef = this.dialog.open(InscriptionComponent, {
      width: '400px',
      data: {
        title: title,
        courseId: courseId
      }
    })
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(result)
    // })
  }

  ngOnDestroy() {
    this.coursesSubscription
  }
}
