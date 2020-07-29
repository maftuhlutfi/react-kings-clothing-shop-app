import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const setCurrentUser = user => ({
	type: 'SET_CURRENT_USER',
	payload: user
});

export const toggleCartHidden = () => ({
	type: 'TOGGLE_CART_HIDDEN'
});

export const addItem = item => ({
	type: 'ADD_ITEM',
	payload: item
})

export const removeItem = item => ({
	type: 'REMOVE_ITEM',
	payload: item
})

export const clearItemFromCart = item => ({
	type: 'CLEAR_ITEM_FROM_CART',
	payload: item
})

export const clearAllItem = () => ({
	type: 'CLEAR_ALL_ITEM'
})

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

export const fetchCollectionsAsync = () => {
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
}