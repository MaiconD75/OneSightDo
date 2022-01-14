import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './ducks/rootReducer';
import { ComponentsPropsState } from './ducks/components/types';
import { ToDosState } from './ducks/todos/types';

export interface ApplicationState {
  components: ComponentsPropsState;
  todos: ToDosState;
}

const store: Store<ApplicationState> = createStore(
  rootReducer,
  composeWithDevTools(),
);

export default store;
