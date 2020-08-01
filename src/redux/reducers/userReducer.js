const INITIAL_STATE = {
	currentUser: null,
	errorMessage: null
}

const userReducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case 'GOOGLE_SIGN_IN_SUCCESS': 
		case 'EMAIL_SIGN_IN_SUCCESS':
			return ({
				...state,
				currentUser: action.payload,
				errorMessage: null
			});
		case 'GOOGLE_SIGN_IN_FAILURE':
		case 'EMAIL_SIGN_IN_FAILURE':
			return ({
				...state,
				errorMessage: action.payload
			})
		default: 
			return state;
	}
}

export default userReducer;