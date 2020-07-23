import React from 'react';
import './CartIcon.scss';

import {connect} from 'react-redux';
import { toggleCartHidden } from '../redux/actions';

function CartIcon({ toggleCartHidden, cartItems }) {
	const fullCart = {
		width: '30px',
	}

	let quantityTotal = 0;

	if (cartItems.length > 1) {
		quantityTotal = cartItems.reduce((total, item) => ({ quantity: total.quantity + item.quantity })).quantity;
	}
	

	return (
		<div className="cart" onClick={toggleCartHidden}>
			<i className="fas fa-shopping-cart"></i>
			{quantityTotal > 0 &&
				<div className='counter' style={quantityTotal > 99 ? fullCart : {}}>
					<span>
						{quantityTotal < 99 && quantityTotal}
						{quantityTotal > 99 && '99+'}
					</span>
				</div>
			}
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({cart}) => ({
	cartItems: cart.cartItems
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);