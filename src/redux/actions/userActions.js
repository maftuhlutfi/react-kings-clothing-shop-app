export const setCurrentUser = user => ({
	type: 'SET_CURRENT_USER',
	payload: user
});

export const googleSignInStart = () => ({
	type: 'GOOGLE_SIGN_IN_START'
})

export const googleSignInSuccess = user => ({
	type: 'GOOGLE_SIGN_IN_SUCCESS',
	payload: user
})

export const googleSignInFailure = errorMessage => ({
	type: 'GOOGLE_SIGN_IN_FAILURE',
	payload: errorMessage
})

export const emailSignInStart = () => ({
	type: 'EMAIL_SIGN_IN_START'
})

export const emailSignInSuccess = user => ({
	type: 'EMAIL_SIGN_IN_SUCCESS',
	payload: user
})

export const emailSignInFailure = errorMessage => ({
	type: 'EMAIL_SIGN_IN_FAILURE',
	payload: errorMessage
})