import {all, call} from 'redux-saga/effects';
import { fetchCollectionsStart } from './shopSagas';
import { userSagas } from './userSagas';

export default function* allSagas() {
	yield all([
		call(fetchCollectionsStart),
		call(userSagas)
	])
}