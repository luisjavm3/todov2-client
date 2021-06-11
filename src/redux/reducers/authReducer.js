import { LOGIN, SIGNUP } from '../actionTypes';

const authData = (state = { token: null, isAuthenticated: false }, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGNUP:
      break;

    case LOGIN:
      console.log(payload);
      return { token: payload.token, isAuthenticated: payload.success };

    default:
      return state;
  }
};

export default authData;
