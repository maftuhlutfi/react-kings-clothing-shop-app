import { combineReducers } from 'redux';
import userReducer from './userReducer';
import cartReducer from './cartReducer';

export const allReducers = combineReducers({
	user: userReducer,
	cart: cartReducer
})