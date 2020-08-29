import { all, put, call, takeLatest, select } from 'redux-saga/effects';
import { clearAllItem, setCartFromFirebase } from '../actions/cartActions';
import { getUserCartRef } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../selectors/userSelector';
import { selectCartItems } from '../selectors/cartSelector';

function* clearCartOnSignOut() {
	yield put(clearAllItem())
}

function* checkCartFromFirebase({ payload: user }) {
	const cartRef = yield getUserCartRef(user.id);
	const cartSnapshot = yield cartRef.get();
	yield put(setCartFromFirebase(cartSnapshot.data().cartItems))
}

function* updateCartInFirebase() {
	const currentUser = yield select(selectCurrentUser);
	if (currentUser) {
		try {
			const cartRef = yield getUserCartRef(currentUser.id);
			const cartItems = yield select(selectCartItems);
			yield cartRef.update({ cartItems });
		} catch (error) {
			console.log(error);
		}
	}
}

export function* onSignOutSucces() {
	yield takeLatest('SIGN_OUT_SUCCESS', clearCartOnSignOut)
}

export function* onSignInSuccess() {
	yield takeLatest('SIGN_IN_SUCCESS', checkCartFromFirebase)
}

export function* onCartChanges() {
	yield takeLatest([
		'ADD_ITEM',
		'REMOVE_ITEM',
		'CLEAR_ITEM_FROM_CART'
	], updateCartInFirebase)
}

export function* cartSagas() {
	yield all([
		call(onSignOutSucces),
		call(onSignInSuccess),
		call(onCartChanges)
	])
}