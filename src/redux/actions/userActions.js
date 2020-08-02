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

export const checkUserSession = () => ({
	type: 'CHECK_USER_SESSION'
})

export const signOutStart = () => ({
	type: 'SIGN_OUT_START'
})

export const signOutSuccess = user => ({
	type: 'SIGN_OUT_SUCCESS'
})

export const signOutFailure = errorMessage => ({
	type: 'SIGN_OUT_FAILURE',
	payload: errorMessage
})