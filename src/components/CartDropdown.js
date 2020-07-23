import React from 'react';
import CustomButton from './CustomButton';

import './CartDropdown.scss';

function CartDropdown(props) {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items' />
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
}

export default CartDropdown;