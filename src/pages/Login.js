import React from 'react';
import {Link} from 'react-router-dom';
import './Login.scss';
import TextField from '../components/TextField';
import CustomButton from '../components/CustomButton';
import GoogleButton from '../components/GoogleButton';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';

import { connect } from 'react-redux';
import { googleSignInStart } from '../redux/actions/userActions';

class Login extends React.Component {
	constructor() {
		super();

		this.state = {
			email: '',
			password: '',
			error: ''
		}
	}

	handleChange = e => {
		this.setState({ error: '' });
		const { value, name } = e.target;

		this.setState({ [name]: value });
	}

	handleClick = async e => {
		e.preventDefault();

		const { email, password } = this.state;

		if (email === '' || password === '') {
			this.setState({ error: 'Please enter email or password' });
			return;
		}

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ password: '', email: '' });
		} catch (err) {
			this.setState({error: 'Wrong email or password.'})
		}	
	}

	render() {
		const { email, password, error } = this.state;
		const { googleSignInStart } = this.props;

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
				{error !== '' && <p className='error'>{error}</p>}
				<CustomButton onClick={this.handleClick}>Login</CustomButton>
				<GoogleButton onClick={googleSignInStart}>Sign in with Google</GoogleButton>
				<p className='footer'>Don't have an account yet? <Link to='/register'>Register here</Link></p>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps)(Login);