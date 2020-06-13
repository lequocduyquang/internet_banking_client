/* eslint-disable no-param-reassign */
import _ from 'lodash';
import { EMPLOYEE } from '../Constants';

const employee = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEE.GET_EMPLOYEE:
      state = action.payload;
      return { ...state };
    case EMPLOYEE.DELETE_EMPLOYEE: {
      if (state.items) {
        _.remove(state.items, (elm) => elm.id === action.id);
      }
      state.total -= 1;
      return { ...state };
    }
    default:
      return state;
  }
};

export default employee;
