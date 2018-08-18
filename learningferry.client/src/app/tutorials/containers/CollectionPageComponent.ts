import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as CollectionActions from "../actions/collection.actions";
import { Tutorial } from "../models/tutorial";
import * as fromTutorials from "../reducers";

@Component({
  selector: "lf-collection-page",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
   
    <lf-Tutorial-list [Tutorials]="Tutorials$ | async"></lf-Tutorial-list>
  `,
  /**
   * Container components are permitted to have just enough styles
   * to bring the view together. If the number of styles grow,
   * consider breaking them out into presentational
   * components.
   */
  styles: [
    `
   
  `
  ]
})
export class CollectionPageComponent implements OnInit {
  Tutorials$: Observable<Tutorial[]>;

  constructor(private store: Store<fromTutorials.State>) {
    this.Tutorials$ = store.pipe(select(fromTutorials.getTutorialCollection));
  }

  ngOnInit() {
    debugger;
    this.store.dispatch(new CollectionActions.Load());
  }
}
