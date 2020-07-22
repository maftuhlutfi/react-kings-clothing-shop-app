import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';

import {connect} from 'react-redux';

import './Header.scss';

function Header({currentUser}) {
	return (
		<div className="header">
			<div className='logo-container'>
				<Link to='/'>
					<img src='./crown.svg' alt='logo' width="100%" />
				</Link>
			</div>
			<div className='options'>
				<Link to='/shop' className='option'>SHOP</Link>
				<Link to='/contact' className='option'>CONTACT</Link>
				{
					currentUser ? 
					<div className='option' onClick={() => auth.signOut()}>LOGOUT</div>
					:
					<Link to='/login' className='option'>LOGIN</Link>
				}
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
	currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);