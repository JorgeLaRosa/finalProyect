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
  studentData: any[] = []

  constructor(private fireService: SchoolZoomService) {


  }


  ngOnInit(): void {
    var currentUserId = JSON.parse(localStorage.getItem('user') || '{}')
    this.suscription = this.fireService.obtenerStudentsFiltered(currentUserId[0].id).subscribe((data) => {
      this.studentData.push(data as any)
    })

  }

  editStudentProfile() {
  }

}
