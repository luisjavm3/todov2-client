import { CREATE_TODO, DELETE_TODO, GET_ALL_TODOS } from '../actionTypes.js';

const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_TODOS:
      return payload;

    case CREATE_TODO:
      return [...state, payload];

    case DELETE_TODO:
      console.log(state);
    // return state.filter((item) => item._id !== payload._id);

    default:
      return state;
  }
};

export default todos;
