import { all, takeLatest, call, put } from 'redux-saga/effects';

import { 
	auth, 
	createUserProfileDocument, 
	googleProvider, 
	getCurrentUser 
} from '../../firebase/firebase.utils';

import {
	signInSuccess,
	signInFailure,
	signOutSuccess,
	signOutFailure
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

export function* isUserLoggedIn() {
	const userAuth = yield getCurrentUser();
	if (userAuth) {
		yield getSnapshotFromUserAuth(userAuth)
	} else {
		return
	}
}

export function* signOut() {
	try {
		yield auth.signOut();
		yield put(signOutSuccess());
	} catch(err) {
		yield put(signOutFailure(err.message))
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest('GOOGLE_SIGN_IN_START', signInWithGoogle)
}

export function* onEmailSignInStart() {
	yield takeLatest('EMAIL_SIGN_IN_START', signInWithEmail)
}

export function* onCheckUserSession() {
	yield takeLatest('CHECK_USER_SESSION', isUserLoggedIn)
}

export function* onSignOutStart() {
	yield takeLatest('SIGN_OUT_START', signOut)
}

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onCheckUserSession),
		call(onSignOutStart)
	])
}