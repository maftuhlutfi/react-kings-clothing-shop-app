import sections from './sectionsData';

const INITIAL_STATE = {
	sections,
	collections: null
}

const dataReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'UPDATE_COLLECTIONS':
			return {
				...state,
				collections: action.payload
			};
		default: 
			return state;
	}
}

export default dataReducer;