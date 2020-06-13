import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import employees from './employee';
import user from './user';
import transactions from './transaction';

const appReducer = combineReducers({
  form: formReducer,
  employees,
  user,
  transactions,
});
export default appReducer;
