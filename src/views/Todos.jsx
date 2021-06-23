import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as api from '../api/TodoApi.js';
import Todo from '../components/Todo.jsx';

const Todos = () => {
  const token = useSelector((state) => state.authData.token);
  const [todos, setTodos] = useState('');

  const foo = async () => {
    const bar = await api.getAllTodos(token);
    setTodos(bar.data.content);
  };

  useEffect(() => {
    foo();
  });

  return (
    <div className="todos">
      <div className="search-bar-wrapper">
        <div className="search-bar">
          <input type="text" className="search-bar__input" />
          <button className="search-bar__create-btn">create</button>
          <button className="search-bar__search-btn">search</button>
        </div>
      </div>

      <ul className="todos-container">
        {(() => {
          if (todos) {
            return todos.map((item, index) => <Todo name={item.name} />);
          }
        })()}
      </ul>
    </div>
  );
};

export default Todos;
