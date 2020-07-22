import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import { allReducers } from '../reducers';

const middlewares = [logger];

const store = createStore(allReducers, applyMiddleware(...middlewares));

export default store;