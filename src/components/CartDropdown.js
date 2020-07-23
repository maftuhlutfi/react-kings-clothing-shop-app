import React from 'react';
import CustomButton from './CustomButton';
import CartItem from './CartItem';

import {connect} from 'react-redux';
import { selectCartItems } from '../redux/selectors/cartSelector';
import { createStructuredSelector } from 'reselect';

import './CartDropdown.scss';

function CartDropdown({cartItems}) {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{
					cartItems.length > 0 ?
						cartItems.map(item => <CartItem key={item.id} item={item} />) :
						<p>No item in cart.</p>
				}
			</div>
			{cartItems.length > 0 && < CustomButton > GO TO CHECKOUT</CustomButton>}
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);