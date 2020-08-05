export const fetchCollectionsStart = () => ({
	type: 'FETCH_COLLECTIONS_START'
})

export const fetchCollectionsSuccess = collections => ({
	type: 'FETCH_COLLECTIONS_SUCCESS',
	payload: collections
})

export const fetchCollectionsFailure = errorMessage => ({
	type: 'FETCH_COLLECTIONS_FAILURE',
	payload: errorMessage
})

/*export const fetchCollectionsAsync = () => {
	return dispatch => {
		const collectionsRef = firestore.collection('collections');
		dispatch(fetchCollectionsStart());

		collectionsRef.get()
			.then(snapshot => {
				const convertedCollection = convertCollectionsSnapshotToMap(snapshot);
				dispatch(fetchCollectionsSuccess(convertedCollection))
			})
			.catch(err => dispatch(fetchCollectionsFailure(err.message)))
	}
}*/