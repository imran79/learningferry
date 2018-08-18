import { AuthActionsUnion, AuthActionTypes } from "../actions/auth.actions";
import { User } from "../models/user";

export interface State {
  loggedIn: boolean;
  isAdmin: boolean;
  user: User | null;
}

export const initialState: State = {
  loggedIn: false,
  isAdmin: true,
  user: null
};

export function reducer(state: State = initialState, action: AuthActionsUnion) {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        loggedIn: true,
        isAdmin: action.payload.user.isAdmin,
        user: action.payload.user
      };
    }

    case AuthActionTypes.Logout: {
      return state;
    }
    default: {
      return state;
    }
  }
}

export const getLoggedIn = (state: State) => state.loggedIn;
export const getAdmin = (state: State) => state.isAdmin;
export const getUser = (state: State) => state.user;
