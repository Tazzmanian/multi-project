import { Action } from '@ngrx/store';

export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SETTOKEN = 'SETTOKEN';

export class Signup implements Action {
    readonly type = SIGNUP;
}

export class Signin implements Action {
    readonly type = SIGNIN;
}

export class Logout implements Action {
    readonly type = LOGOUT;
}

export class SetToken implements Action {
    readonly type = SETTOKEN;

    constructor(public payload: string) {
    }
}

export type AuthActions = Signin | Signup | Logout | SetToken;
