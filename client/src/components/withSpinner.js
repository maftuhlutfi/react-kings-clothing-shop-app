import React from 'react';

import './withSpinner.scss';

function withSpinner(WrappedComponent) {
	function Spinner({isLoading, ...otherProps}) {
		return (
			isLoading ? 
				<div className='spinner-overlay'>
					<div className='spinner-container' />
				</div>
				:
				<WrappedComponent {...otherProps} />
		)
	}

	return Spinner;
}

export default withSpinner;