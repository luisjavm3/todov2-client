import { LOGIN, SIGNUP } from '../actionTypes';

const user = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGNUP:
      break;

    case LOGIN:
      break;

    default:
      return state;
  }
};

export default user;
