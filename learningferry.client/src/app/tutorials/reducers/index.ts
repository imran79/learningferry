import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap
} from "@ngrx/store";

import * as fromTutorials from "./tutorials.reducer";
import * as fromCollection from "./collection.reducer";
import * as fromRoot from "../../reducers";

export interface TutorialsState {
  Tutorials: fromTutorials.State;
  collection: fromCollection.State;
}

export interface State extends fromRoot.State {
  Tutorials: TutorialsState;
}

export const reducers: ActionReducerMap<TutorialsState> = {
  Tutorials: fromTutorials.reducer,
  collection: fromCollection.reducer
};

/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `Tutorials` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 *   constructor(state$: Observable<State>) {
 *     this.TutorialsState$ = state$.pipe(select(getTutorialsState));
 *   }
 * }
 * ```
 */

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const getTutorialsState = createFeatureSelector<TutorialsState>(
  "Tutorials"
);

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them usable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function creates very efficient selectors that are memoized and
 * only recompute when arguments change. The created selectors can also be composed
 * together to select different pieces of state.
 */
export const getTutorialEntitiesState = createSelector(
  getTutorialsState,
  state => state.Tutorials
);

export const getSelectedTutorialId = createSelector(
  getTutorialEntitiesState,
  fromTutorials.getSelectedId
);

/**
 * Adapters created with @ngrx/entity generate
 * commonly used selector functions including
 * getting all ids in the record set, a dictionary
 * of the records by id, an array of records and
 * the total number of records. This reduces boilerplate
 * in selecting records from the entity state.
 */
export const {
  selectIds: getTutorialIds,
  selectEntities: getTutorialEntities,
  selectAll: getAllTutorials,
  selectTotal: getTotalTutorials
} = fromTutorials.adapter.getSelectors();

export const getSelectedTutorial = createSelector(
  getTutorialEntities,
  getSelectedTutorialId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);

/**
 * Just like with the Tutorials selectors, we also have to compose the search
 * reducer's and collection reducer's selectors.
 */

/**
 * Some selector functions create joins across parts of state. This selector
 * composes the search result IDs to return an array of Tutorials in the store.
 */

export const getCollectionState = createSelector(
  getTutorialsState,
  (state: TutorialsState) => state.collection
);

export const getCollectionLoaded = createSelector(
  getCollectionState,
  fromCollection.getLoaded
);
export const getCollectionLoading = createSelector(
  getCollectionState,
  fromCollection.getLoading
);
export const getCollectionTutorialIds = createSelector(
  getCollectionState,
  fromCollection.getIds
);

export const getTutorialCollection = createSelector(
  getTutorialEntities,
  getCollectionTutorialIds,
  (entities, ids) => {
    return ids.map(id => entities[id]);
  }
);

export const isSelectedTutorialInCollection = createSelector(
  getCollectionTutorialIds,
  getSelectedTutorialId,
  (ids, selected) => {
    return ids.indexOf(selected) > -1;
  }
);
