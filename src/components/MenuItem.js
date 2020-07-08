import React from 'react';
import './MenuItem.scss';

export default function MenuItem({ title, imageUrl, linkUrl, size }) {
	return (
		<div className={`${size} menu-item`}>
			<div className="bg-image" style={{backgroundImage: `url(${imageUrl})`}} />
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	);
}