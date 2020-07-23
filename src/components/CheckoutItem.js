import React from 'react';

import './CheckoutItem.scss';

import { connect } from 'react-redux';
import { addItem, removeItem, clearItemFromCart } from '../redux/actions';

function CheckoutItem({cartItem, addItem, removeItem, clearItemFromCart}) {
	const { imageUrl, name, quantity, price } = cartItem;

	return (
		<div className="checkout-item">
			<div className='image-container'>
				<img src={imageUrl} alt='img' />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
				<span className='value'>{quantity}</span>
				<div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
			</span>
			<span className='price'>${price * quantity}</span>
			<span className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#10005;</span>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item)),
	clearItemFromCart: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);