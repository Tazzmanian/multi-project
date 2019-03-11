import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as AuthActions from './store/auth.actions';

@Injectable()
export class AuthService {

    constructor(private router: Router, private store: Store<fromApp.AppState>) { }
    signinUser(email: any, password: any): any {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                this.store.dispatch(new AuthActions.Signin());
                this.getToken();
                this.router.navigate(['/']);
            })
            .catch(err => console.log(err));
    }

    signupUser(email: string, password: string) {
        console.log('tuk');
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                this.store.dispatch(new AuthActions.Signup());
                this.getToken();
            })
            .catch(err => console.log(err));
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(token => {
                this.store.dispatch(new AuthActions.SetToken(token));
            });
    }

    logout() {
        firebase.auth().signOut();
        this.store.dispatch(new AuthActions.Logout());
    }
}
