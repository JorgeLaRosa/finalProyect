import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { SchoolZoomService } from 'src/app/core/services/school-zoom.service';
import { User } from 'src/app/models/user.interface';
import { AppState } from 'src/app/state/app.state';
import { activeSessionSelector, sessionSelector } from 'src/app/state/selectors/login.selector';
//import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  course!: string;
  courseId!: string;
  student!: User;

  constructor(
    private fireService: SchoolZoomService,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, courseId: string },
    private store: Store<AppState>) {
    this.store.select(sessionSelector).subscribe(state => {
      this.student = state.currentUser;
    });
    this.course = data.title
    this.courseId = data.courseId
  }

  newEnrollRegister() {
    this.fireService.newRegister(this.courseId, this.student.id, this.student.courses);
    alert("Felicitaciones!! Estas inscriptio al curso!")
    //aca agregar alert que doga que estas inscripto
  }

  ngOnInit(): void {
  }


}
