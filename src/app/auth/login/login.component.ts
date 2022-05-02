import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { SchoolZoomService } from '../../core/services/school-zoom.service';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm!: FormGroup;
  users!: any[];

  constructor(private fireService: SchoolZoomService, private fb: FormBuilder) {

    this.fireService.obtenerStudents().subscribe((data) => {
      this.users = [];
      data.forEach((i) => {
        this.users.push({
          ...i.payload.doc.data()
        })
      })


    })

    this.logInForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  login() {
    for (let i = 0; i < this.users.length; i++) {
      if (this.logInForm.value.email === this.users[i].name) {
        console.log("usuario existe");
      }

    }

  }

  ngOnInit(): void {
  }

}
