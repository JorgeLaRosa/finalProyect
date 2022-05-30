import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { RegisterComponent } from 'src/app/auth/register/register.component';
import { SchoolZoomService } from '../../../core/services/school-zoom.service';
//import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})

export class StudentProfileComponent implements OnInit {
  suscription!: Subscription;
  studentData!: any;
  constructor(private fireService: SchoolZoomService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    var currentUserId = JSON.parse(localStorage.getItem('user') || '{}')

    setTimeout(() => {
      this.suscription = this.fireService.obtenerStudentsFiltered(currentUserId[0].id).subscribe((data) => {
        this.studentData = data
        this.studentData = { ...this.studentData, edit: true, id: currentUserId[0].id }
      })
    }, 1000);
  }

  editStudentProfile() {

    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '450px',
      data: this.studentData,
    })

  }
}
