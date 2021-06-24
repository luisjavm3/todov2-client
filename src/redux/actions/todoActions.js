import * as API from '../../api/TodoApi.js';
import { CREATE_TODO, DELETE_TODO, GET_ALL_TODOS } from '../actionTypes.js';

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
    dispatch({ type: CREATE_TODO, payload: data.todo });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = (token, todoId) => async (dispatch) => {
  try {
    const { data } = await API.deleteTodo(token, todoId);
    console.log(data);
    dispatch({ type: DELETE_TODO, payload: data.todo });
  } catch (error) {
    console.log(error);
  }
};
