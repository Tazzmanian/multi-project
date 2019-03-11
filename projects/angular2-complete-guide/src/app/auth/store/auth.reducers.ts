import * as AuthActions from './auth.actions';

export interface State {
    token: string;
    authenticated: boolean;
}

const initialState: State = {
    token: null,
    authenticated: false
};

export function authReducers(state = initialState, action: AuthActions.AuthActions) {
    console.log(0, state, action);


    switch (action.type) {
        case (AuthActions.SIGNUP):
        case (AuthActions.SIGNIN):
            console.log(1);
            return {
                ...state,
                authenticated: true
            };
        case (AuthActions.LOGOUT):
            console.log(2);
            return {
                ...state,
                authenticated: false,
                token: null
            };
        case (AuthActions.SETTOKEN):
            return {
                ...state,
                token: action.payload
            };
        default: return state;
    }
}
