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