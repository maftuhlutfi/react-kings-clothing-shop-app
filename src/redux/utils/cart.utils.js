export const addItemToCart = (cartItems, itemToAdd) => {
	const exists = cartItems.find(item => item.id === itemToAdd.id);

	if (exists) {
		return cartItems.map(cartItem => {
			return cartItem.id === itemToAdd.id ?
				{ ...cartItem, quantity: cartItem.quantity + 1 } : cartItem;
		})
	} else {
		return [...cartItems, { ...itemToAdd, quantity: 1 }];
	}
}