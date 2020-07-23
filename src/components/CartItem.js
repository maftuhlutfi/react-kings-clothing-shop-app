import React from 'react';
import './CartItem.scss';

function CartItem({ item: { name, imageUrl, price, quantity } }) {
	return (
		<div className="cart-item">
			<img src={imageUrl} alt={name} />
			<div className='item-details'>
				<p className='name'>{name}</p>
				<span>{quantity} x ${price}</span>
			</div>
		</div>
	);
}

export default CartItem;