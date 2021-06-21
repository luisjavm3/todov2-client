import { LOGIN, LOGOUT, SIGNUP } from '../actionTypes';

const authData = (state = { token: null, isAuthenticated: false }, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGNUP:
      break;

    case LOGIN:
      return { token: payload.token, isAuthenticated: payload.success };

    case LOGOUT:
      return { token: null, isAuthenticated: false };

    default:
      return state;
  }
};

export default authData;
