import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import employees from './employee';
import user from './user';

const appReducer = combineReducers({
  form: formReducer,
  employees,
  user,
});
export default appReducer;
