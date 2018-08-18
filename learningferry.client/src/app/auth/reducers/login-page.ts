import { AuthActionsUnion, AuthActionTypes } from '../actions/auth.actions';
import { User } from '../models/user';

export interface State {
    error: string | null;
    pending: boolean;
}

export const initialState: State = {
    error: "",
    pending: false
}

export function reducer(state: State = initialState, action: AuthActionsUnion) {

    switch (action.type) {
        case AuthActionTypes.Login: {
            return {
                ...state,
                pending: true,
                error: null
            }
        }
        case AuthActionTypes.LoginFailure: {
            return {
                ...state,
                error: action.payload,
                pending: false
            }
        }

        case AuthActionTypes.LoginSuccess: {
            return {
                ...state,
                error: null,
                pending: false
            }
        }

        default: {
            return state;
        }
    }

}

export const getError = (state: State) => state.error
export const getPending = (state: State) => state.pending