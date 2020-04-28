import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';

const Register = ({ register, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		register({ email, password });
	};

	if (isAuthenticated) {
		return <Redirect to='/dashboard' />;
	}
	return (
		<div className='flex items-center justify-center bg-gray-50 mx-auto items-center flex-grow'>
			<div className='w-full'>
				<div>
					<h2 className='mt-6 text-center text-4xl leading-9 font-extrabold text-gray-900'>
						Register a new account
					</h2>
				</div>
				<form
					className='mt-10'
					onSubmit={(e) => onSubmit(e)}
					action='#'
					method='POST'
				>
					<input type='hidden' name='remember' value='true' />
					<div className='rounded-md shadow-sm'>
						<div>
							<input
								aria-label='Email address'
								name='email'
								type='email'
								required
								className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-md sm:leading-7'
								placeholder='Email address'
								value={email}
								onChange={(e) => onChange(e)}
							/>
						</div>
						<div className='-mt-px'>
							<input
								aria-label='Password'
								name='password'
								type='password'
								required
								className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-md sm:leading-7'
								placeholder='Password'
								value={password}
								onChange={(e) => onChange(e)}
							/>
						</div>
						<div className='-mt-px'>
							<input
								aria-label='Password2'
								name='password2'
								type='password'
								required
								className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-md sm:leading-7'
								placeholder='Confirm your Password'
							/>
						</div>
					</div>

					<div className='mt-10'>
						<button
							type='submit'
							className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out'
						>
							Sign up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

Register.propTypes = {
	register: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
