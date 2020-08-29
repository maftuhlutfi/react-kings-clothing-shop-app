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

export const updateFirebaseCart = () => ({
	type: 'UPDATE_FIREBASE_CART'
})

export const setCartFromFirebase = cartItems => ({
	type: 'SET_CART_FROM_FIREBASE',
	payload: cartItems
})