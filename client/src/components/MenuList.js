import React from 'react';
import './MenuList.scss';

export default function MenuList(props) {
	return (
		<div className="menu-list">
			{props.children}
		</div>
	);
}