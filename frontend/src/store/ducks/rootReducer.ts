import { combineReducers } from 'redux';
import components from './components';
import todos from './todos';

export default combineReducers({
  components,
  todos,
});
