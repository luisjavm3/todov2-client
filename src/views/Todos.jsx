import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as api from '../api/TodoApi.js';
import Todo from '../components/Todo.jsx';
import { createTodo } from '../redux/actions/todoActions.js';

const Todos = () => {
  const token = useSelector((state) => state.authData.token);
  const [searchTerm, setSearchTerm] = useState('');
  const [todos, setTodos] = useState('');
  const dispatch = useDispatch();
  let history = useHistory();

  const foo = async () => {
    const bar = await api.getAllTodos(token);
    setTodos(bar.data.content);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCreate = (e) => {
    const regex = /[a-zA-Z]{4,}/;

    if (!regex.test(searchTerm)) {
      console.log('Introduce a valid to-do.');
      return;
    }

    dispatch(createTodo(token, { name: searchTerm }))
      .then((foo) => {
        history.push('/');
      })
      .catch(() => {
        console.log(`Error in the dispatch.`);
      });
  };

  useEffect(() => {
    foo();
  }, []);

  console.log(todos);

  return (
    <div className="todos">
      <div className="search-bar-wrapper">
        <div className="search-bar">
          <input
            type="text"
            className="search-bar__input"
            onChange={(e) => handleInputChange(e)}
          />
          <button
            className="search-bar__create-btn"
            onClick={(e) => handleCreate(e)}
          >
            create
          </button>
          <button className="search-bar__search-btn">search</button>
        </div>
      </div>

      <ul className="todos-container">
        {(() => {
          if (todos) {
            return todos.map((item) => (
              <Todo
                key={item._id}
                _id={item._id}
                name={item.name}
                username={item?.user?.username}
                dispatch={dispatch}
                token={token}
              />
            ));
          }
        })()}
      </ul>
    </div>
  );
};

export default Todos;
