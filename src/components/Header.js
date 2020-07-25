import React from 'react';
import CartIcon from './CartIcon';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';
import CartDropdown from './CartDropdown';

import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartToggleHidden } from '../redux/selectors/cartSelector';
import { selectCurrentUser } from '../redux/selectors/userSelector';

import './Header.scss';

function Header({currentUser, hidden}) {
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
						<div className='option' onClick={() => auth.signOut()}>LOGOUT</div>
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

export default connect(mapStateToProps)(Header);