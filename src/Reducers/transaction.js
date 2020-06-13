/* eslint-disable no-param-reassign */
import { TRANSACTION } from '../Constants';

const transaction = (state = {}, action) => {
  switch (action.type) {
    case TRANSACTION.GET_TRANSACTION:
      state = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default transaction;
