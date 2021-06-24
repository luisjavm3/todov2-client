import { CREATE_TODO, GET_ALL_TODOS } from '../actionTypes.js';

const todos = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_TODOS:
      console.log(payload);
      return payload;

    case CREATE_TODO:
      return { ...state, payload };

    default:
      return state;
  }
};

export default todos;
