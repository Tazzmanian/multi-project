import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {

    token: string;

    constructor(private router: Router) {}
    signinUser(email: any, password: any): any {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                this.router.navigate(['/']);
                this.getToken();
            })
            .catch(err => console.log(err));
    }

    signupUser(email: string, password: string) {
        console.log('tuk');
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(err => console.log(err));
    }

    getToken() {
        firebase.auth().currentUser.getIdToken().then(res => this.token = res);
        return this.token;
    }

    isAuthenticated() {
        return !!this.token;
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
    }
}
