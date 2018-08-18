import { Action } from "@ngrx/store";
import { Tutorial } from "../models/tutorial";

export enum CollectionActionTypes {
  AddTutorial = "[Collection] Add Tutorial",
  AddTutorialSuccess = "[Collection] Add Tutorial Success",
  AddTutorialFail = "[Collection] Add Tutorial Fail",
  RemoveTutorial = "[Collection] Remove Tutorial",
  RemoveTutorialSuccess = "[Collection] Remove Tutorial Success",
  RemoveTutorialFail = "[Collection] Remove Tutorial Fail",
  Load = "[Collection] Load",
  LoadSuccess = "[Collection] Load Success",
  LoadFail = "[Collection] Load Fail"
}

/**
 * Add Tutorial to Collection Actions
 */
export class AddTutorial implements Action {
  readonly type = CollectionActionTypes.AddTutorial;

  constructor(public payload: Tutorial) {}
}

export class AddTutorialSuccess implements Action {
  readonly type = CollectionActionTypes.AddTutorialSuccess;

  constructor(public payload: Tutorial) {}
}

export class AddTutorialFail implements Action {
  readonly type = CollectionActionTypes.AddTutorialFail;

  constructor(public payload: Tutorial) {}
}

/**
 * Remove Tutorial from Collection Actions
 */
export class RemoveTutorial implements Action {
  readonly type = CollectionActionTypes.RemoveTutorial;

  constructor(public payload: Tutorial) {}
}

export class RemoveTutorialSuccess implements Action {
  readonly type = CollectionActionTypes.RemoveTutorialSuccess;

  constructor(public payload: Tutorial) {}
}

export class RemoveTutorialFail implements Action {
  readonly type = CollectionActionTypes.RemoveTutorialFail;

  constructor(public payload: Tutorial) {}
}

/**
 * Load Collection Actions
 */
export class Load implements Action {
  debugger;
  readonly type = CollectionActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = CollectionActionTypes.LoadSuccess;
  debugger;
  constructor(public payload: Tutorial[]) {
    debugger;
  }
}

export class LoadFail implements Action {
  readonly type = CollectionActionTypes.LoadFail;
  debugger;
  constructor(public payload: any) {}
}

export type CollectionActionsUnion =
  | AddTutorial
  | AddTutorialSuccess
  | AddTutorialFail
  | RemoveTutorial
  | RemoveTutorialSuccess
  | RemoveTutorialFail
  | Load
  | LoadSuccess
  | LoadFail;
