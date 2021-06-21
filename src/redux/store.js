import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import authData from './reducers/authReducer';
import todos from './reducers/todoReducer';

const reducer = combineReducers({ authData, todos });

const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store;
