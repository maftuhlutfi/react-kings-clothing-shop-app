import React from 'react';
import './Register.scss';
import { Link } from 'react-router-dom';
import TextField from '../components/TextField';
import CustomButton from '../components/CustomButton';

import {connect} from 'react-redux';
import { signUpStart } from '../redux/actions/userActions';

class Register extends React.Component {
	constructor() {
		super();

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
			error: ''
		}
	}

	handleChange = e => {
		this.setState({ error: '' });
		const { value, name } = e.target;

		this.setState({ [name]: value });
	}

	handleClick = e => {
		e.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;
		const { signUpStart } = this.props;

		if (displayName === '' || email ==='' || password === '') {
			this.setState({ error: 'Please fill the form.' });
			return;
		}

		if (password !== confirmPassword) {
			this.setState({ error: 'Password not match.' });
			return;
		}

		signUpStart({ email, password, displayName });
	}

	render() {
		const { displayName, email, password, confirmPassword, error } = this.state;
		return (
			<div className='login'>
				<h2>Register</h2>
				<p>To find amazing clothes for your Outfit of the Day</p>
				<form className='form'>
					<TextField
						name='displayName'
						onChange={this.handleChange}
						value={displayName}
						type='text'
						placeholder='Display Name'
						required
					/>
					<TextField
						name='email'
						onChange={this.handleChange}
						value={email}
						type='text'
						placeholder='Email'
						required
					/>
					<TextField
						name='password'
						onChange={this.handleChange}
						value={password}
						type='password'
						placeholder='Password'
						required
					/>
					<TextField
						name='confirmPassword'
						onChange={this.handleChange}
						value={confirmPassword}
						type='password'
						placeholder='Confirm Password'
						required
					/>
				</form>
				{error !== '' && <p className='error'>{error}</p>}
				<CustomButton onClick={this.handleClick}>Register</CustomButton>
				<p className='footer'>Already have an account? <Link to='/login'>Login here</Link></p>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	signUpStart: userData => dispatch(signUpStart(userData))
})

export default connect(null, mapDispatchToProps)(Register);