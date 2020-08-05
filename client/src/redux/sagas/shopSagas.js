import {takeEvery, call, put, all } from 'redux-saga/effects';

import { fetchCollectionsSuccess, fetchCollectionsFailure } from '../actions/dataActions';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export function* fetchCollectionsAsync() {
	try {
		const collectionsRef = firestore.collection('collections');
		const snapshot = yield collectionsRef.get();
		const convertedCollection = yield call(convertCollectionsSnapshotToMap, snapshot);
		yield put(fetchCollectionsSuccess(convertedCollection));
	} catch (err) {
		yield put(fetchCollectionsFailure(err.message));
	}
}

export function* fetchCollectionsStart() {
	yield takeEvery(
		'FETCH_COLLECTIONS_START',
		fetchCollectionsAsync
	)
}

export function* shopSagas() {
	yield all([
		call(fetchCollectionsStart)
	])
}