import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Authentication } from '../../models/user';
import * as fromAuth from '../../reducers';
import * as AuthActions from '../../actions/auth.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  pending$ = this.store.pipe(select(fromAuth.getPending));
  error$ = this.store.pipe(select(fromAuth.getError));

  constructor(private store: Store<fromAuth.State>) { }

  ngOnInit() { }

  onSubmit($event: Authentication) {
    this.store.dispatch(new AuthActions.Login($event));
  }
}
