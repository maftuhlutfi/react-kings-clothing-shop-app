import sections from './sectionsData';

const INITIAL_STATE = {
	sections,
	collections: null,
	isLoading: false,
	errorMessage: ''
}

const dataReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'FETCH_COLLECTIONS_START':
			return {
				...state,
				isLoading: true
			}
		case 'FETCH_COLLECTIONS_SUCCESS':
			return {
				...state,
				collections: action.payload,
				isLoading: false
			};
		case 'FETCH_COLLECTIONS_FAILURE':
			return {
				...state,
				isLoading: false,
				errorMessage: action.payload
			}
		default: 
			return state;
	}
}

export default dataReducer;