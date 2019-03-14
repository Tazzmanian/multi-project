import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as fromApp from '../../store/app.reducers';
import { Store } from '@ngrx/store';
import * as fromAuth from '../store/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  onSignup(f: NgForm) {
    console.log('tuk');
    const email = f.value.email;
    const password = f.value.password;
    this.store.dispatch(new fromAuth.TrySignup({ username: email, password: password }));
  }

}
