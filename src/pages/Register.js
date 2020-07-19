import React from 'react';
import './Register.scss';
import { Link } from 'react-router-dom';
import TextField from '../components/TextField';
import CustomButton from '../components/CustomButton';

class Register extends React.Component {
	constructor() {
		super();

		this.state = {
			username: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}

	handleChange = e => {
		const { value, name } = e.target;

		this.setState({ [name]: value });
	}

	handleClick = e => {
		e.preventDefault();

		this.setState({ password: '', email: '', confirmPassword: '' });
	}

	render() {
		const { username, email, password, confirmPassword } = this.state;
		return (
			<div className='login'>
				<h2>Register</h2>
				<p>To find amazing clothes for your Outfit of the Day</p>
				<form className='form'>
					<TextField
						name='username'
						onChange={this.handleChange}
						value={username}
						type='text'
						placeholder='Username'
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
				<CustomButton onClick={this.handleClick}>Register</CustomButton>
				<p className='footer'>Already have an account? <Link to='/login'>Login here</Link></p>
			</div>
		);
	}
}

export default Register;