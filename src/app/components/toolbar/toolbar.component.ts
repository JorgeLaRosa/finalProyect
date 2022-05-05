import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  isLogged!: boolean;

  constructor(private router: Router) { }

  activar() {
    if (localStorage.getItem('user') != null) {
      return true;
    } else {
      return false;
    }
  }

  logIn() {

  }

  logOut() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {

  }
}
