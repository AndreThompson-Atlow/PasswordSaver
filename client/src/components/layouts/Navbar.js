import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
	let location = useLocation();
	const [activeLinks, setLinks] = useState({
		dashActive: true,
		settingsActive: false,
		welcomeActive: true,
		loginActive: false,
		regActive: false,
	});
	const offLinks = {
		dashActive: false,
		settingsActive: false,
		welcomeActive: false,
		loginActive: false,
		regActive: false,
	};

	useEffect(() => {
		switch (location.pathname) {
			case '/':
			case '/EasyAccess':
			case '/SecurePasswords':
				setLinks({
					...offLinks,
					welcomeActive: true,
				});
				break;
			case '/Login':
				setLinks({
					...offLinks,
					loginActive: true,
				});
				break;
			case '/Register':
				setLinks({
					...offLinks,
					regActive: true,
				});
				break;
			case '/Dashboard':
			case '/dashboard/AddPassword':
			case '/dashboard/GenPassword':
				setLinks({
					...offLinks,
					dashActive: true,
				});
				break;
			case '/Settings':
				setLinks({
					...offLinks,
					settingsActive: true,
				});
				break;
			default:
				setLinks({
					...offLinks,
				});
		}
	}, [location.pathname]);

	const {
		dashActive,
		settingsActive,
		welcomeActive,
		loginActive,
		regActive,
	} = activeLinks;

	//If the dashboard is active, it needs to change its style
	let dashboard = dashActive ? (
		<Link
			to='/Dashboard'
			className='inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out'
		>
			Dashboard
		</Link>
	) : (
		<Link
			to='/Dashboard'
			className='inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
		>
			Dashboard
		</Link>
	);
	let settings = settingsActive ? (
		<Link
			to='/Settings'
			className='ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out'
		>
			Settings
		</Link>
	) : (
		<Link
			to='/Settings'
			className='ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
		>
			Settings
		</Link>
	);
	let welcome = welcomeActive ? (
		<Link
			to='/'
			className='inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out'
		>
			Dashboard
		</Link>
	) : (
		<Link
			to='/'
			className='inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
		>
			Dashboard
		</Link>
	);
	let login = loginActive ? (
		<Link
			to='/Login'
			className='ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out'
		>
			Login
		</Link>
	) : (
		<Link
			to='/Login'
			className='ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
		>
			Login
		</Link>
	);
	let register = regActive ? (
		<Link
			to='/Register'
			className='ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-blue-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out'
		>
			Register
		</Link>
	) : (
		<Link
			to='/Register'
			className='ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
		>
			Register
		</Link>
	);
	let logoutTag = (
		<a
			onClick={logout}
			href='#!'
			className='ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out'
		>
			Logout
		</a>
	);

	const authLinks = (
		<div className='text-sm flex-grow'>
			{dashboard}
			{settings}
			{logoutTag}
		</div>
	);

	const guestLinks = (
		<div className='text-sm flex-grow'>
			{welcome}
			{login}
			{register}
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
