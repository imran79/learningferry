import { Action } from "@ngrx/store";
import { Tutorial } from "../models/tutorial";

export enum TutorialActionTypes {
  Search = "[Tutorial] Search",
  SearchComplete = "[Tutorial] Search Complete",
  SearchError = "[Tutorial] Search Error",
  Load = "[Tutorial] Load",
  Select = "[Tutorial] Select"
}

export class Search implements Action {
  readonly type = TutorialActionTypes.Search;

  constructor(public payload: string) {}
}

export class SearchComplete implements Action {
  readonly type = TutorialActionTypes.SearchComplete;

  constructor(public payload: Tutorial[]) {}
}

export class SearchError implements Action {
  readonly type = TutorialActionTypes.SearchError;

  constructor(public payload: string) {}
}

export class Load implements Action {
  readonly type = TutorialActionTypes.Load;

  constructor(public payload: Tutorial) {}
}

export class Select implements Action {
  readonly type = TutorialActionTypes.Select;

  constructor(public payload: string) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type TutorialActionsUnion =
  | Search
  | SearchComplete
  | SearchError
  | Load
  | Select;
