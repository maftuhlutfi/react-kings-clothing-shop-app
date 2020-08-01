import {all, call} from 'redux-saga/effects';
import { fetchCollectionsStart } from './shopSagas';

export default function* allSagas() {
	yield all([
		call(fetchCollectionsStart)
	])
}