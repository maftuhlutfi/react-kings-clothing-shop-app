import React, { useState } from 'react';
import './Register.scss';
import { Link } from 'react-router-dom';
import TextField from '../components/TextField';
import CustomButton from '../components/CustomButton';

import { connect } from 'react-redux';
import { signUpStart } from '../redux/actions/userActions';

const Register = ({ signUpStart }) => {
	const [input, setInput] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	})
	const { displayName, email, password, confirmPassword } = input;

	const [error, setError] = useState('');

	const handleChange = e => {
		const { value, name } = e.target;
		setInput({ ...input, [name]: value });
		setError('');
	}

	const handleClick = e => {
		e.preventDefault();

		if (displayName === '' || email === '' || password === '') {
			setError('Please fill the form.');
			return;
		}

		if (password !== confirmPassword) {
			setError('Password not match.');
			return;
		}

		signUpStart({ email, password, displayName });
	}

	return (
		<div className='login'>
			<h2>Register</h2>
			<p>To find amazing clothes for your Outfit of the Day</p>
			<form className='form'>
				<TextField
					name='displayName'
					onChange={handleChange}
					value={displayName}
					type='text'
					placeholder='Display Name'
					required
				/>
				<TextField
					name='email'
					onChange={handleChange}
					value={email}
					type='text'
					placeholder='Email'
					required
				/>
				<TextField
					name='password'
					onChange={handleChange}
					value={password}
					type='password'
					placeholder='Password'
					required
				/>
				<TextField
					name='confirmPassword'
					onChange={handleChange}
					value={confirmPassword}
					type='password'
					placeholder='Confirm Password'
					required
				/>
			</form>
			{error !== '' && <p className='error'>{error}</p>}
			<CustomButton onClick={handleClick}>Register</CustomButton>
			<p className='footer'>Already have an account? <Link to='/login'>Login here</Link></p>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	signUpStart: userData => dispatch(signUpStart(userData))
})

export default connect(null, mapDispatchToProps)(Register);