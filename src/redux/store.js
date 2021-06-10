import { combineReducers, createStore } from 'redux';

import user from './reducers/userReducer';

const reducer = combineReducers({ user });

const store = createStore(reducer);

export default store;
