import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './userReducer';
import cartReducer from './cartReducer';
import dataReducer from './dataReducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
}

const allReducers = combineReducers({
	user: userReducer,
	cart: cartReducer,
	data: dataReducer
})

export default persistReducer(persistConfig, allReducers);