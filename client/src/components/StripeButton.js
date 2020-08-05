import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import CustomButton from './CustomButton';
import axios from 'axios';

import {connect} from 'react-redux';
import { clearAllItem } from '../redux/actions/cartActions';

function StripeButton({ price, clearAllItem }) {
	const priceCents = price * 100;
	const publishableKey = 'pk_test_51H8ey9KjiuF6v9nM8TJsu2VKZAHTOui6vpmdLLzLLPnWFj3T4d1Rtkn2c4U2F6XT9QLaVbo12pDI8aUiOmUAYCz000e9zI6eGq'

	const onToken = token => {
		axios({
			url: 'http://localhost:4000/payment',
			method: 'post',
			data: {
				amount: priceCents,
				token
			}
		})
			.then(response => {
				alert('Payment successfully.');
				clearAllItem();
			})
			.catch(error => {
				alert('There was an issue with the payment.');
				console.log(error);
			})
	}

	return (
		<StripeCheckout
			label='Pay Now'
			image='/crown.svg'
			name="King's Clothing Ltd."
			billingAddress
			shippingAddress
			description={`Your total price is $${price}`}
			amount={priceCents}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		>
			<CustomButton>Pay Now</CustomButton>
		</StripeCheckout>
	);
}

const mapDispatchToProps = dispatch => ({
	clearAllItem: () => dispatch(clearAllItem())
})

export default connect(null, mapDispatchToProps)(StripeButton);