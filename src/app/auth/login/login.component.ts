import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { SchoolZoomService } from '../../core/services/school-zoom.service';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInForm!: FormGroup;
  users!: any[];
  errorMessagge!: string;

  constructor(private fireService: SchoolZoomService, private fb: FormBuilder, private router: Router) {

    this.fireService.obtenerStudents().subscribe((data) => {
      this.users = [];
      data.forEach((i) => {
        this.users.push({
          id: i.payload.doc.id,
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
    var user = this.logInForm.value.user;
    var password = this.logInForm.value.password
    //this.fireService.login(user);

    var userFilter = this.users.filter(i => i.user == this.logInForm.value.email && i.password == this.logInForm.value.password)
    if (userFilter.length > 0) {
      localStorage.setItem('user', JSON.stringify(userFilter));
      if (userFilter[0].isAdmin == false) {
        this.router.navigate(['/alumnos/perfil'])
      } else {
        this.router.navigate(['/admin/cursosCreator'])
      }
    } else {
      this.errorMessagge = "Usuario o Contraseña Inconrrecto"
    }
  }

  ngOnInit(): void {
  }

}
