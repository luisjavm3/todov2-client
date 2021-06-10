import { LOGIN, SIGNUP } from '../actionTypes';

const token = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGNUP:
      break;

    case LOGIN:
      return payload.token;

    default:
      return state;
  }
};

export default token;
