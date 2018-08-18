import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { asyncScheduler, empty, Observable, of } from "rxjs";
import {
  catchError,
  debounceTime,
  map,
  skip,
  switchMap,
  takeUntil
} from "rxjs/operators";

import {
  Search,
  SearchComplete,
  SearchError,
  TutorialActionTypes
} from "../actions/tutorial.actions";
import { TutorialService } from "../services/tutorial.service";
import { Tutorial } from "../models/tutorial";
import {
  LoadFail,
  LoadSuccess,
  CollectionActionTypes
} from "../actions/collection.actions";

/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class TutorialEffects {
  @Effect()
  Load$: Observable<Action> = this.actions$.pipe(
    ofType(CollectionActionTypes.Load),
    switchMap(() =>
      this.tutorialService.getAllTutorials().pipe(
        map((tutorials: Tutorial[]) => new LoadSuccess(tutorials))
        //catchError(err => of(new LoadFail(err)))
      )
    )
  );

  /* {
    return this.tutorialService
      .getAllTutorials()
      .pipe(
        map((tutorials: Tutorial[]) => new LoadSuccess(tutorials)),
        catchError(err => of(new LoadFail(err)))
      );
  }; */

  constructor(
    private actions$: Actions,
    private tutorialService: TutorialService
  ) {
    debugger;
  }
}
