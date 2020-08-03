import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import TextField from '../components/TextField';
import CustomButton from '../components/CustomButton';
import GoogleButton from '../components/GoogleButton';

import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../redux/actions/userActions';

const Login = ({ emailSignInStart, googleSignInStart }) => {
	const [input, setInput] = useState({
		email: '',
		password: ''
	})
	const { email, password } = input;

	const [error, setError] = useState('');

	const handleChange = e => {
		const { value, name } = e.target;
		setInput({ ...input, [name]: value });
		setError('');
	}

	const handleClick = async e => {
		e.preventDefault();

		if (email === '' || password === '') {
			setError('Please enter email or password');
			return;
		}

		emailSignInStart(email, password);
	}

	return (
		<div className='login'>
			<h2>Login</h2>
			<p>Please login with your email and password</p>
			<form className='form'>
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
			</form>
			{error !== '' && <p className='error'>{error}</p>}
			<CustomButton onClick={handleClick}>Login</CustomButton>
			<GoogleButton onClick={googleSignInStart}>Sign in with Google</GoogleButton>
			<p className='footer'>Don't have an account yet? <Link to='/register'>Register here</Link></p>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(Login);