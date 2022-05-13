import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterComponent } from '../auth/register/register.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  openDialog() {
    // this.dialog.open(RegisterComponent, {
    //   width: '400px',
    //   data: {
    //     name: "jorge",
    //     dni: 323232
    //   }
    // })
  }
  ngOnInit(): void {
  }

}
