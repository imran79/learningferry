import {
  CollectionActionTypes,
  CollectionActionsUnion
} from "./../actions/collection.actions";

export interface State {
  loaded: boolean;
  loading: boolean;
  ids: string[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  ids: []
};

export function reducer(
  state = initialState,
  action: CollectionActionsUnion
): State {
  switch (action.type) {
    case CollectionActionTypes.Load: {
      debugger;
      return {
        ...state,
        loading: true
      };
    }

    case CollectionActionTypes.LoadSuccess: {
      debugger;
      return {
        loaded: true,
        loading: false,
        ids: action.payload.map(tutorial => tutorial.id)
      };
    }

    case CollectionActionTypes.AddTutorialSuccess:
    case CollectionActionTypes.RemoveTutorialFail: {
      if (state.ids.indexOf(action.payload.id) > -1) {
        return state;
      }

      return {
        ...state,
        ids: [...state.ids, action.payload.id]
      };
    }

    case CollectionActionTypes.RemoveTutorialSuccess:
    case CollectionActionTypes.AddTutorialFail: {
      return {
        ...state,
        ids: state.ids.filter(id => id !== action.payload.id)
      };
    }

    default: {
      return state;
    }
  }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getIds = (state: State) => state.ids;
