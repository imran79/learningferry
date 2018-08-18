import { ChangeDetectionStrategy, Component } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as AuthActions from "../../../auth/actions/auth.actions";
import * as fromAuth from "../../../auth/reducers";
import * as fromRoot from "../../../reducers";
import * as LayoutActions from "../../actions/layout.actions";

@Component({
  selector: "lf-app",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
   
      
      <lf-toolbar (openMenu)="openSidenav()">
        <lf-nav-item (navigate)="closeSidenav()"  routerLink="/" >
          Home
        </lf-nav-item>
        <lf-nav-item (navigate)="closeSidenav()" routerLink="/courses" >
          Courses
        </lf-nav-item>
           <lf-nav-item (navigate)="closeSidenav()" routerLink="/tutorials">
          Tutorials
        </lf-nav-item>
        
        <lf-nav-item (navigate)="logout()" *ngIf="!(loggedIn$ | async)">
          Login
        </lf-nav-item>
        <lf-nav-item (navigate)="logout()" *ngIf="loggedIn$ | async">
          Sign Out
        </lf-nav-item>
     

         <lf-nav-item (navigate)="logout()" routerLink="/admin" *ngIf="(isAdmin$ | async)">
          Admin
        </lf-nav-item>
      </lf-toolbar>
     

        <lf-sidenav [open]="showSidenav$ | async">
        <lf-nav-header bckGroundImage ="https://cdn.pixabay.com/photo/2016/09/01/19/53/pocket-watch-1637396_960_720.jpg">
        </lf-nav-header>
        <lf-nav-item (navigate)="closeSidenav()"  routerLink="/" >
          Home
        </lf-nav-item>
        <lf-nav-item (navigate)="closeSidenav()" routerLink="/courses" >
          Courses
        </lf-nav-item>

        <lf-nav-item (navigate)="closeSidenav()" routerLink="/tutorials" >
          Tutorials
        </lf-nav-item>
       
        <lf-nav-item (navigate)="logout()" *ngIf="!(loggedIn$ | async)">
          Login
        </lf-nav-item>
        <lf-nav-item (navigate)="logout()" *ngIf="loggedIn$ | async">
          Sign Out
        </lf-nav-item>
        
        

      </lf-sidenav>

      <router-outlet></router-outlet>
   
  `
})
export class AppComponent {
  showSidenav$: Observable<boolean>;
  loggedIn$: Observable<boolean>;
  isAdmin$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */
    this.showSidenav$ = this.store.pipe(select(fromRoot.getShowSidenav));
    this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
    this.isAdmin$ = this.store.pipe(select(fromAuth.getAdmin));
  }

  closeSidenav() {
    /**
     * All state updates are handled through dispatched actions in 'container'
     * components. This provides a clear, reproducible history of state
     * updates and user interaction through the life of our
     * application.
     */
    this.store.dispatch(new LayoutActions.CloseSidenav());
  }

  openSidenav() {
    this.store.dispatch(new LayoutActions.OpenSidenav());
  }

  logout() {
    this.closeSidenav();

    this.store.dispatch(new AuthActions.Logout());
  }
}
