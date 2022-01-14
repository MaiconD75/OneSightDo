import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';

import produce from 'immer';
import { ToDosState, ToDosActionsTypes } from './types';
import * as Actions from './actions';

type ToDosActions = ActionType<typeof Actions>;

const INITIAL_STATE: ToDosState = {
  data: {
    pendingToDoList: [],
    completedToDoList: [],
  },
};

const reducer: Reducer<ToDosState, ToDosActions> = (
  state = INITIAL_STATE,
  action,
) => {
  return produce(state, draft => {
    switch (action.type) {
      case ToDosActionsTypes.SET_TODOS: {
        draft.data.pendingToDoList =
          action.payload.pendingList || draft.data.pendingToDoList;

        draft.data.completedToDoList =
          action.payload.completedList || draft.data.completedToDoList;
        return draft;
      }
      default: {
        return draft;
      }
    }
  });
};

export default reducer;
