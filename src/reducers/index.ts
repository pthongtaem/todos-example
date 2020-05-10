import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import auth from './auth';

const AppReducer = combineReducers({
  todos,
  visibilityFilter,
  auth,
});

export type RootState = ReturnType<typeof AppReducer>;

export default AppReducer;
