import * as API from '../../api/TodoApi.js';
import { GET_ALL_TODOS } from '../actionTypes.js';

export const getAllTodos = (token) => async (dispatch) => {
  try {
    const { data } = await API.getAllTodos(token);

    dispatch({ type: GET_ALL_TODOS, payload: data.content });
  } catch (error) {
    console.log(error);
  }
};
