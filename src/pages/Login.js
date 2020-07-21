import React from 'react';
import {Link} from 'react-router-dom';
import './Login.scss';
import TextField from '../components/TextField';
import CustomButton from '../components/CustomButton';
import GoogleButton from '../components/GoogleButton';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';

class Login extends React.Component {
	constructor() {
		super();

		this.state = {
			email: '',
			password: ''
		}
	}

	handleChange = e => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	}

	handleClick = async e => {
		e.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ password: '', email: '' });
		} catch (err) {
			console.log(err);
		}	
	}

	render() {
		const { email, password } = this.state;
		return (
			<div className='login'>
				<h2>Login</h2>
				<p>Please login with your email and password</p>
				<form className='form'>
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
				</form>
				<CustomButton onClick={this.handleClick}>Login</CustomButton>
				<GoogleButton onClick={signInWithGoogle}>Sign in with Google</GoogleButton>
				<p className='footer'>Don't have an account yet? <Link to='/register'>Register here</Link></p>
			</div>
		);
	}
}

export default Login;