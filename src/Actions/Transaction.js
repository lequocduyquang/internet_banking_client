/* eslint-disable no-use-before-define */
/* eslint-disable no-useless-catch */
import { TRANSACTION } from '../Constants';
import { getTransaction } from '../Services/Transaction';

export const fetchTransaction = (
  page = null,
  begin = null,
  end = null,
  partner = null,
) => {
  return async (dispatch) => {
    try {
      const transactions = await getTransaction(page, begin, end, partner);
      if (transactions.status === 200) {
        dispatch(fetchTransactionSuccess(transactions.data));
      }
    } catch (error) {
      throw error;
    }
  };
  function fetchTransactionSuccess(data) {
    return {
      type: TRANSACTION.GET_TRANSACTION,
      payload: data,
    };
  }
};
