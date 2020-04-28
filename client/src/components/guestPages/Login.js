import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const onChange = (e) =>
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});

	const onSubmit = async (e) => {
		e.preventDefault();
		login(email, password);
	};

	if (isAuthenticated) {
		return <Redirect to='/dashboard' />;
	}
	return (
		<div className='flex items-center justify-center bg-gray-50 mx-auto items-center flex-grow'>
			<div className='w-full'>
				<div>
					<h2 className='mt-6 text-center text-4xl leading-9 font-extrabold text-gray-900'>
						Login to your account
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
								className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-md sm:leading-7'
								placeholder='Password'
								value={password}
								onChange={(e) => onChange(e)}
							/>
						</div>
					</div>

					<div className='mt-6 flex items-center justify-between'>
						<div className='flex items-center'>
							<input
								id='remember_me'
								type='checkbox'
								className='form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out'
							/>
							<label
								htmlFor='remember_me'
								className='ml-2 block text-sm leading-5 text-gray-900'
							>
								Remember me
							</label>
						</div>

						<div className='text-sm leading-5'>
							<Link
								to='/'
								className='font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150'
							>
								Forgot your password?
							</Link>
						</div>
					</div>

					<div className='mt-10'>
						<button
							type='submit'
							className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out'
						>
							Sign in
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
Login.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
