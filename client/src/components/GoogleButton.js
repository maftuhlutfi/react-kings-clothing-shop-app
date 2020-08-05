import React from 'react';
import './GoogleButton.scss';

function GoogleButton(props) {
	return (
		<button className="google-button" onClick={props.onClick}>
			<i className="fab fa-google"></i>
			<div className='text'>{props.children}</div>
		</button>
	);
}

export default GoogleButton;