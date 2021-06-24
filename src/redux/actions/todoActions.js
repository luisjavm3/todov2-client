import * as API from '../../api/TodoApi.js';
import { CREATE_TODO, GET_ALL_TODOS } from '../actionTypes.js';

export const getAllTodos = (token) => async (dispatch) => {
  try {
    const { data } = await API.getAllTodos(token);

    dispatch({ type: GET_ALL_TODOS, payload: data.content });
  } catch (error) {
    console.log(error);
  }
};

export const createTodo = (token, todo) => async (dispatch) => {
  try {
    const { data } = await API.createTodo(token, todo);
    console.log(data);
    console.log(data.todo);
    dispatch({ type: CREATE_TODO, payload: data.todo });
  } catch (error) {
    console.log(error);
  }
};
