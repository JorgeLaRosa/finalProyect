import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { SchoolZoomService } from '../../core/services/school-zoom.service';
import { InscriptionComponent } from '../inscription/inscription.component';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  coursesSubscription!: Subscription;
  courses!: any[]


  constructor(public cursosService: SchoolZoomService, public dialog: MatDialog) {

  }


  ngOnInit(): void {
    this.coursesSubscription = this.cursosService.getCourses().subscribe((data) => {
      this.courses = [];
      data.forEach(i => {
        this.courses.push({
          id: i.payload.doc.id,
          ...i.payload.doc.data()
        })
      })
    })
  }

  newInscription() {
    const dialogRef = this.dialog.open(InscriptionComponent, {
      width: '400px',
    })
  }
}
