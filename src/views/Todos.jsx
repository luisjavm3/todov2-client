import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllTodos } from '../redux/actions/todoActions.js';
import { useSelector } from 'react-redux';

const Todos = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authData.token);

  useEffect(() => {
    dispatch(getAllTodos(token));
  });

  return (
    <div>
      <h1>Todos</h1>
      <hr />
    </div>
  );
};

export default Todos;
