import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

function Header(props) {
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
			</div>
		</div>
	);
}

export default Header;