import React from 'react';
import CartIcon from './CartIcon';
import { Link } from 'react-router-dom';
import CartDropdown from './CartDropdown';

import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartToggleHidden } from '../redux/selectors/cartSelector';
import { selectCurrentUser } from '../redux/selectors/userSelector';
import { signOutStart } from '../redux/actions/userActions';

import './Header.scss';

function Header({ currentUser, hidden, signOutStart }) {
	return (
		<div className="header">
			<div className='logo-container'>
				<Link to='/'>
					<img src='/crown.svg' alt='logo' width="100%" />
				</Link>
			</div>
			<div className='right-side'>
				<CartIcon />
				<div className='options'>
					<Link to='/shop' className='option'>SHOP</Link>
					{
						currentUser ? 
							<div className='option' onClick={signOutStart}>LOGOUT</div>
						:
						<Link to='/login' className='option login'>LOGIN</Link>
					}
				</div>
			</div>
			{!hidden && <CartDropdown />}
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartToggleHidden
});

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);