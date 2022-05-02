import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, Subscription } from 'rxjs';
import { SchoolZoomService } from '../../../core/services/school-zoom.service';


@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})

export class StudentProfileComponent implements OnInit {
  suscription!: Subscription;
  studentData!: Observable<any>;

  constructor(private fireService: SchoolZoomService) {
    this.suscription = this.fireService.obtenerStudentsFiltered().subscribe((data: any) => this.studentData = data)

  }

  ngOnInit(): void {
  }

  editStudentProfile() {
    console.log(this.studentData)

  }

}
