import { USER } from '../Constants';

const user = (state = {}, action) => {
  switch (action.type) {
    case USER.LOGIN_SUCCESS:
      return { isLogin: true };
    case USER.LOGIN_FAILED:
      return { isLogin: false };
    default:
      return state;
  }
};

export default user;
