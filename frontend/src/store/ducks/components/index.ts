import { Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';

import produce from 'immer';
import { ComponentsPropsState, ComponentsPropsTypes } from './types';
import * as Actions from './actions';

type ComponentsPropsActions = ActionType<typeof Actions>;

const INITIAL_STATE: ComponentsPropsState = {
  data: {
    formModalIsOpen: false,
    initialData: {},
  },
};

const reducer: Reducer<ComponentsPropsState, ComponentsPropsActions> = (
  state = INITIAL_STATE,
  action,
) => {
  return produce(state, draft => {
    switch (action.type) {
      case ComponentsPropsTypes.SWITCH_FORM_MODAL_IS_OPEN: {
        draft.data.formModalIsOpen = !draft.data.formModalIsOpen;
        return draft;
      }
      case ComponentsPropsTypes.SET_FORM_INITIAL_DATA: {
        draft.data.initialData = action.payload.initialData;
        return draft;
      }
      default: {
        return draft;
      }
    }
  });
};

export default reducer;
