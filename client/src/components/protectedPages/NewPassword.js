import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addAccount } from '../../actions/account';
import { getAccount } from '../../actions/account';
import { setAlert } from '../../actions/alert';

const NewPassword = ({ addAccount }) => {
	const [formData, setFormData] = useState({
		site: '',
		login: '',
		password: '',
	});

	const { site, login, password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		addAccount({ site, login, password });
		getAccount();
		setFormData({
			site: '',
			login: '',
			password: '',
		});
	};

	return (
		<div className='flex items-center justify-center bg-gray-50 mx-auto items-center flex-grow'>
			<div className='w-full'>
				<div>
					<h2 className='mt-6 text-center text-4xl leading-9 font-extrabold text-gray-900'>
						Add a new password
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
								aria-label='Site or Application'
								name='site'
								type='text'
								required
								className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-md sm:leading-7'
								placeholder='Site or Application'
								value={site}
								onChange={(e) => onChange(e)}
							/>
						</div>
						<div>
							<input
								aria-label='Username or Email'
								name='login'
								type='text'
								required
								className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-md sm:leading-7'
								placeholder='Username or Email'
								value={login}
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
					<div className='mt-10'>
						<button
							type='submit'
							className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out'
						>
							Add Password
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

NewPassword.propTypes = {
	addAccount: PropTypes.func.isRequired,
};

export default connect(null, { addAccount })(NewPassword);
