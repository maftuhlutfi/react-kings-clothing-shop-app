import { all, takeLatest, call, put } from 'redux-saga/effects';
import { auth, createUserProfileDocument, googleProvider } from '../../firebase/firebase.utils';
import {
	signInSuccess,
	signInFailure
} from '../actions/userActions';

function* getSnapshotFromUserAuth(user) {
	try {
		const userRef = yield call(createUserProfileDocument, user);
		const userSnapshot = yield userRef.get();
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (err) {
		yield put(signInFailure(err.message));
	}
}

export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield getSnapshotFromUserAuth(user);
	} catch(err) {
		yield put(signInFailure(err.message));
	}
}

export function* signInWithEmail({payload: {email, password}}) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield getSnapshotFromUserAuth(user);
	} catch (err) {
		yield put(signInFailure(err.message));
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest('GOOGLE_SIGN_IN_START', signInWithGoogle)
}

export function* onEmailSignInStart() {
	yield takeLatest('EMAIL_SIGN_IN_START', signInWithEmail)
}

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart)
	])
}