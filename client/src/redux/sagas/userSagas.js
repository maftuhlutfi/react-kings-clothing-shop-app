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
	signOutFailure,
	signUpSuccess,
	signUpFailure
} from '../actions/userActions';

function* getSnapshotFromUserAuth(user, additionalData) {
	try {
		const userRef = yield call(createUserProfileDocument, user, additionalData);
		const userSnapshot = yield userRef.get();
		if (additionalData) {
			yield put(signUpSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
		} else {
			yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
		}
		
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

export function* signUp({payload: {email, password, displayName}}) {
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(
			email,
			password
		);
		yield getSnapshotFromUserAuth(user, { displayName });
	} catch (err) {
		yield put(signUpFailure(err.message))
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

export function* onSignUpStart() {
	yield takeLatest('SIGN_UP_START', signUp)
}

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onCheckUserSession),
		call(onSignOutStart),
		call(onSignUpStart)
	])
}