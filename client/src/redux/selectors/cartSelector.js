import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
)

export const selectCartToggleHidden = createSelector(
	[selectCart],
	cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	cartItems => cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
)

export const selectTotalPrice = createSelector(
	[selectCartItems],
	cartItems => cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)
)