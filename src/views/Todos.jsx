import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as api from '../api/TodoApi.js';

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
    <div>
      <h1>Todos</h1>
      <hr />

      <ul>
        {(() => {
          if (todos) {
            return todos.map((item, index) => <li key={index}>{item.name}</li>);
          }
        })()}
      </ul>
    </div>
  );
};

export default Todos;
