/* eslint-disable no-use-before-define */
/* eslint-disable no-useless-catch */
import { trackPromise } from 'react-promise-tracker';
import { USER } from '../Constants';
import { login } from '../Services/User';

export const loginEmployee = (email, password) => {
  return async (dispatch) => {
    try {
      const ret = await trackPromise(login(email, password));
      if (ret.status === 200) {
        const { accessToken, refreshToken } = ret.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        dispatch(loginEmployeeSuccess());
        window.location.href = '/dashboard';
      } else {
        dispatch(loginEmployeeFailed());
      }
    } catch (error) {
      dispatch(loginEmployeeFailed());
      throw error;
    }
  };
  function loginEmployeeSuccess() {
    return {
      type: USER.LOGIN_SUCCESS,
    };
  }
  function loginEmployeeFailed() {
    return {
      type: USER.LOGIN_FAILED,
    };
  }
};
