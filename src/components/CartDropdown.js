import React from 'react';
import CustomButton from './CustomButton';
import CartItem from './CartItem';

import {withRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import { toggleCartHidden } from '../redux/actions';
import { selectCartItems } from '../redux/selectors/cartSelector';
import { createStructuredSelector } from 'reselect';

import './CartDropdown.scss';

function CartDropdown({cartItems, history, dispatch}) {
	const handleClick = e => {
		history.push('/checkout');
		dispatch(toggleCartHidden());
	}

	return (
		<div className='cart-dropdown'>
				{
					cartItems.length ?
						<div className='cart-items'>
						{cartItems.map(item => <CartItem key={item.id} item={item} />)}
						</div> 
						: 
						<p>Your cart is empty.</p>
				}
			{cartItems.length > 0 && <CustomButton onClick={handleClick}> GO TO CHECKOUT</CustomButton>}
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));