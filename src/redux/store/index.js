import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import { allReducers } from '../reducers';

const middlewares = [logger];

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;