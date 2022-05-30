import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.interface';
import { closeSession } from 'src/app/state/actions/login.action';
import { AppState } from 'src/app/state/app.state';
import { sessionSelector } from 'src/app/state/selectors/login.selector';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  isLogged!: boolean;
  userName!: string;

  constructor(private router: Router, private store: Store<AppState>) { }

  activar() {
    if (localStorage.getItem('user') != null) {
      this.store.select(sessionSelector).subscribe(state => {
        this.userName = state.currentUser.name;
      })

      return true;
    } else {
      return false;
    }
  }

  logOut() {
    this.store.dispatch(closeSession());
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    this.userName = '';
  }

  ngOnInit(): void {

  }
}
