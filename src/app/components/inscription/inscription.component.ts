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
  courses!: any

  constructor(private fireService: SchoolZoomService, fb: FormBuilder) {
    this.inscriptionForm = new FormGroup({
      courseId: new FormControl(''),
      studentId: new FormControl('')
    });
  }

  newRegister() {
    this.fireService.newRegister(this.inscriptionForm.value)
  }

  ngOnInit(): void {
  }

}
