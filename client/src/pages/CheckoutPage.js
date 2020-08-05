import React from 'react';

import './CheckoutPage.scss';

import CheckoutItem from '../components/CheckoutItem';
import StripeButton from '../components/StripeButton';

import { connect } from 'react-redux';
import { selectCartItems } from '../redux/selectors/cartSelector';
import { selectTotalPrice } from '../redux/selectors/cartSelector';
import { createStructuredSelector } from 'reselect';

function CheckoutPage({cartItems, totalPrice}) {
	return (
		<div className='checkout-page'>
			<div className='checkout-header'>
				<div className='header-block'>
					Product
				</div>
				<div className='header-block'>
					Description
				</div>
				<div className='header-block'>
					Quantity
				</div>
				<div className='header-block'>
					Price
				</div>
				<div className='header-block'>
					Remove
				</div>
			</div>

			{
				cartItems.length ?
				cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />) :
				<p>No items to checkout.</p>
			}
			<div className='total-price'>
				{cartItems.length ? <span>Total price: ${totalPrice}</span> : ''}
			</div>

			{cartItems.length ? <StripeButton price={totalPrice} /> : ''}
			
			{cartItems.length ? 
				<span className='payment-guide'>
					Please use this Credit Card<br/>
					No. 4242 4242 4242 4242 - Exp. Future Date - CVV. 123
				</span> : ''
			}
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	totalPrice: selectTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage);