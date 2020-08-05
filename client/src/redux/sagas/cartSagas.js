import { all, put, call, takeLatest } from 'redux-saga/effects';
import { clearAllItem } from '../actions/cartActions';

function* clearCartOnSignOut() {
	yield put(clearAllItem())
}

export function* onSignOutSucces() {
	yield takeLatest('SIGN_OUT_SUCCESS', clearCartOnSignOut)
}

export function* cartSagas() {
	yield all([
		call(onSignOutSucces)
	])
}