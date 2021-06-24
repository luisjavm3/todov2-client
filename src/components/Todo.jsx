import React from 'react';
import { deleteTodo } from '../redux/actions/todoActions';
import * as API from '../api/TodoApi.js';
import { useHistory } from 'react-router-dom';

const Todo = ({ name, username = 'none', dispatch, _id, token }) => {
  let history = useHistory();

  const handleRemove = async (e) => {
    const deletedTodo = await API.deleteTodo(token, _id);

    history.push('/');
  };

  return (
    <li className="todo">
      <span className="todo__name">{name}</span>
      <span className="todo__username">
        {username !== 'none' ? username : ''}
      </span>
      <div className="todo__btn-container">
        <button className="todo__update">update</button>
        <button className="todo__remove" onClick={(e) => handleRemove(e)}>
          remove
        </button>
      </div>
    </li>
  );
};

export default Todo;
