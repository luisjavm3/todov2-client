import React from 'react';

const Todo = ({ name, username = 'none' }) => {
  return (
    <li className="todo">
      <span className="todo__name">{name}</span>
      <span className="todo__username">{username}</span>
      <div className="todo__btn-container">
        <button className="todo__update">update</button>
        <button className="todo__remove">remove</button>
      </div>
    </li>
  );
};

export default Todo;
