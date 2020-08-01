import { all, takeLatest, call, put } from 'redux-saga/effects';
import { auth, createUserProfileDocument, googleProvider } from '../../firebase/firebase.utils';
import {
	googleSignInSuccess,
	googleSignInFailure,
	emailSignInSuccess,
	emailSignInFailure
} from '../actions/userActions';

export function* signInWithGoogle() {
	try {
		yield console.log('sdasda');
		const { user } = yield auth.signInWithPopup(googleProvider);
		const userRef = yield call(createUserProfileDocument, user);
		const userSnapshot = yield userRef.get();
		yield put(googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch(err) {
		yield put(googleSignInFailure(err.message));
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest('GOOGLE_SIGN_IN_START', signInWithGoogle)
}

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart)
	])
}