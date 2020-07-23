import React from 'react';
import './CustomButton.scss';

function CustomButton({children, inverted, ...otherProps}) {
	return (
		<button className={`custom-button ${inverted && 'inverted'}`} {...otherProps} >
			{children}
		</button>
	);
}

export default CustomButton;