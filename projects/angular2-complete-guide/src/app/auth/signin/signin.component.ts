import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as fromAuth from '../store/auth.actions';
import * as fromApp from '../../store/app.reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  onSignin(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;
    // this.as.signinUser(email, password);
    this.store.dispatch(new fromAuth.TrySignin({username: email, password: password}));
  }
}
