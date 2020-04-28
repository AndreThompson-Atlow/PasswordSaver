import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<div class='text-sm flex-grow'>
			<Link
				to='/Dashboard'
				class='inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out'
			>
				Dashboard
			</Link>
			<Link
				to='/Settings'
				class='ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
			>
				Settings
			</Link>

			<a
				onClick={logout}
				href='#!'
				class='ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
			>
				Logout
			</a>
		</div>
	);

	const guestLinks = (
		<div className='text-sm flex-grow'>
			<Link
				to='/'
				className='inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out'
			>
				Dashboard
			</Link>
			<Link
				to='/Login'
				className='ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
			>
				Login
			</Link>
			<Link
				to='/Register'
				className='ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
			>
				Register
			</Link>
		</div>
	);

	return (
		<nav className='bg-white shadow mb-12'>
			<div className='flex items-center justify-between p-4'>
				<div className='flex items-center flex-grow text-black mr-6'>
					<i className='fas fa-code ml-8 mr-3 text-xl'></i>
					<span className='font-semibold text-xl'>Password Saver</span>
				</div>
				<div className='flex items-center flex-shrink-0 text-black m-0'>
					{isAuthenticated ? authLinks : guestLinks}
				</div>
			</div>
		</nav>
	);
};

const mapStateToProps = (state) => ({
	logout: PropTypes.func.isRequired,
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
