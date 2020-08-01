export const googleSignInStart = () => ({
	type: 'GOOGLE_SIGN_IN_START'
})

export const emailSignInStart = emailAndPassword => ({
	type: 'EMAIL_SIGN_IN_START',
	payload: emailAndPassword
})

export const signInSuccess = user => ({
	type: 'SIGN_IN_SUCCESS',
	payload: user
})

export const signInFailure = errorMessage => ({
	type: 'SIGN_IN_FAILURE',
	payload: errorMessage
})