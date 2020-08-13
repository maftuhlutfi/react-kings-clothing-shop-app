import React from 'react';

import './withSpinner.scss';

function Spinner() {
	return (
		<div className='spinner-overlay'>
			<div className='spinner-container' />
		</div>
	)
}

export default Spinner;