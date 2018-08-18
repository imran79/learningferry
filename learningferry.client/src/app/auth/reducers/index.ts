import {
  createFeatureSelector,
  createSelector,
  ActionReducerMap
} from "@ngrx/store";
import * as authReducer from "./auth";
import * as loginPageReducer from "./login-page";

export interface AuthState {
  status: authReducer.State;
  loginPage: loginPageReducer.State;
}

export interface State {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AuthState> = {
  status: authReducer.reducer,
  loginPage: loginPageReducer.reducer
};

export const selectAuthState = createFeatureSelector<AuthState>("auth");

export const selectAuthStateStatus = createSelector(
  selectAuthState,
  (state: AuthState) => state.status
);

export const getUser = createSelector(
  selectAuthStateStatus,
  authReducer.getUser
);

export const getLoggedIn = createSelector(
  selectAuthStateStatus,
  authReducer.getLoggedIn
);
export const getAdmin = createSelector(
  selectAuthStateStatus,
  authReducer.getAdmin
);

export const selectAuthStateLoginPage = createSelector(
  selectAuthState,
  (state: AuthState) => state.loginPage
);

export const getError = createSelector(
  selectAuthStateLoginPage,
  loginPageReducer.getError
);

export const getPending = createSelector(
  selectAuthStateLoginPage,
  loginPageReducer.getPending
);
