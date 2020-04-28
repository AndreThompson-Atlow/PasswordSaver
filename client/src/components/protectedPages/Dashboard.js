import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getAccount } from '../../actions/account';
import SavedPassword from '../layouts/SavedPassword';

const Dashboard = ({ accounts, getAccount }) => {
	useEffect(() => {
		getAccount();
	}, []);

	return (
		<div className='w-full mx-auto px-8 flex-grow flex'>
			{/* <!-- Left of Container --> */}
			<div></div>
			{/* <!-- Inside Container --> */}
			<div className='relative inline-block max-w-6xl mx-auto flex-grow '>
				{/* <!-- Table of Passwords --> */}
				<div className='flex flex-col p-3'>
					<div className='-my-2 py-2 -mx-8 px-8'>
						<div className='align-middle inline-block min-w-full shadow-xl rounded-lg border-gray-300 border'>
							<table>
								<thead>
									<tr>
										<th>Website</th>
										<th>Login</th>
										<th>Password</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									<Fragment>
										{accounts !== null &&
											accounts.length > 0 &&
											accounts.map((account) => (
												<SavedPassword
													site={account.site}
													login={account.login}
													password={account.password}
												/>
											))}
										{accounts == null ||
											(accounts.length <= 0 && (
												<p className='p-5 m-5 text-red-400 text-center '>
													You don't have any saved passwords.
												</p>
											))}
									</Fragment>
								</tbody>
							</table>
							<div className='bg-gray-100 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
								<div className='flex-1 flex justify-between sm:hidden'>
									<a
										href='#'
										className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150'
									>
										Previous
									</a>
									<a
										href='#'
										className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150'
									>
										Next
									</a>
								</div>
								<div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
									<div>
										<span className='relative z-0 inline-flex shadow-sm'>
											<button
												type='button'
												className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150'
											>
												<svg
													className='h-5 w-5'
													fill='currentColor'
													viewBox='0 0 20 20'
												>
													<path
														fill-rule='evenodd'
														d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
														clip-rule='evenodd'
													/>
												</svg>
											</button>
											<button
												type='button'
												className='-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-700 hover:text-blue-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-blue-700 transition ease-in-out duration-150'
											>
												1
											</button>
											<button
												type='button'
												className='-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150'
											>
												2
											</button>
											<button
												type='button'
												className='hidden md:inline-flex -ml-px relative items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150'
											>
												3
											</button>

											<button
												type='button'
												className='-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150'
											>
												<svg
													className='h-5 w-5'
													fill='currentColor'
													viewBox='0 0 20 20'
												>
													<path
														fill-rule='evenodd'
														d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
														clip-rule='evenodd'
													/>
												</svg>
											</button>
										</span>
									</div>
									<div>
										<span className='inline-flex rounded-md shadow-sm ml-8'>
											<Link
												to='/dashboard/GenPassword'
												type='button'
												className='inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-indigo active:bg-blue-700 transition ease-in-out duration-150'
											>
												Generate Password
											</Link>
										</span>
										<span className='inline-flex rounded-md shadow-sm ml-8'>
											<Link
												to='/dashboard/AddPassword'
												type='button'
												className='inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-indigo active:bg-blue-700 transition ease-in-out duration-150'
											>
												Add Password
											</Link>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Right of Container --> */}
			<div></div>
		</div>
	);
};

Dashboard.propTypes = {
	getAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	accounts: state.account.accounts,
});

export default connect(mapStateToProps, { getAccount })(Dashboard);
