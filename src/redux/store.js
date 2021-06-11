import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import authData from './reducers/authReducer';

const reducer = combineReducers({ authData });

const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store;
