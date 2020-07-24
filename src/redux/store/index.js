import {createStore} from 'redux';
import {persistStore} from 'redux-persist';

import allReducers from '../reducers';

export const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const persistor = persistStore(store);