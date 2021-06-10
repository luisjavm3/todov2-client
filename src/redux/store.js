import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import token from './reducers/authReducer';

const reducer = combineReducers({ token });

const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store;
