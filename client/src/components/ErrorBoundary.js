import React from 'react';

import './ErrorBoundary.scss';

class ErrorBoundary extends React.Component {
	constructor() {
		super();

		this.state = {
			hasError: false
		}
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		console.log(error);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div class='error-container'>
					<img alt='error-img' src='https://i.imgur.com/A040Lxr.png' />
					<h1>Something went wrong...</h1>
					<span>Please check your internet connection or contact the developer.</span>
				</div>
			)
		}

		return this.props.children;
	}
}

export default ErrorBoundary;