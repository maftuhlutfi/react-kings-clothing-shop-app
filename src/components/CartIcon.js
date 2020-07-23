import React from 'react';
import './CartIcon.scss';

import {connect} from 'react-redux';
import { toggleCartHidden } from '../redux/actions';
import { selectCartItemsCount } from '../redux/selectors/cartSelector';
import { createStructuredSelector } from 'reselect';

function CartIcon({ toggleCartHidden, quantityTotal }) {
	const fullCart = {
		width: '30px',
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

const mapStateToProps = createStructuredSelector({
	quantityTotal: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);