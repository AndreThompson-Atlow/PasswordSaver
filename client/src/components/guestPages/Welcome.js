import React, { Fragment, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

const Welcome = () => {
	if (localStorage.getItem('email') !== null) {
		if (localStorage.getItem('arrival') == 'true') {
			localStorage.setItem('arrival', false);
			return <Redirect to='/Login' />;
		}
	}
	return (
		<Fragment>
			<div className='relative bg-white overflow-hidden flex-grow'>
				<div className='max-w-screen-xl mx-auto'>
					<div className='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
						<svg
							className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
							fill='currentColor'
							viewBox='0 0 100 100'
							preserveAspectRatio='none'
						>
							<polygon points='50,0 100,0 50,100 0,100' />
						</svg>

						<div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
							<nav className='relative flex items-center justify-between sm:h-10 lg:justify-start'>
								<div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
									<div className='flex items-center justify-between w-full md:w-auto'>
										<div className='-mr-2 flex items-center md:hidden'>
											<button
												type='button'
												className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out'
											>
												<svg
													className='h-6 w-6'
													stroke='currentColor'
													fill='none'
													viewBox='0 0 24 24'
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth='2'
														d='M4 6h16M4 12h16M4 18h16'
													/>
												</svg>
											</button>
										</div>
									</div>
								</div>
								<div className='hidden md:block md:ml-10 md:pr-4'>
									<Link
										to='/SecurePasswords'
										className='ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out'
									>
										Secure Passwords
									</Link>
									<Link
										to='/EasyAccess'
										className='ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out'
									>
										Easy Access
									</Link>
									<Link
										to='/Welcome'
										className='ml-8 font-medium text-blue-600 hover:text-blue-900 focus:outline-none focus:text-blue-700 transition duration-150 ease-in-out'
									>
										Get Started
									</Link>
								</div>
							</nav>
						</div>

						<div className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
							<div className='rounded-lg shadow-md'>
								<div className='rounded-lg bg-white shadow-xs overflow-hidden'>
									<div className='px-5 pt-4 flex items-center justify-between'>
										<div className='-mr-2'>
											<button
												type='button'
												className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out'
											>
												<svg
													className='h-6 w-6'
													stroke='currentColor'
													fill='none'
													viewBox='0 0 24 24'
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth='2'
														d='M6 18L18 6M6 6l12 12'
													/>
												</svg>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
							<div className='sm:text-center lg:text-left flex flex-col'>
								<h2 className='flex-grow text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl'>
									Efficient <span className='mr-10'> security</span> for all of{' '}
									<span className='mr-16'>your</span>
									<br className='xl:hidden' />
									<span className='text-blue-600'> online accounts</span>
								</h2>
								<p className='mt-3 flex-grow text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
									Password Saver is a utility designed from the ground up for an
									intuitive user experience. Overflowing with simplicity,
									password saver emphasizes what really matters-- efficient
									access to your favorite sites without compromising security.
									You can generate secure passwords, store saved passwords and
									copy them to your clip board.
								</p>
								<div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
									<div className='rounded-md shadow'>
										<Link
											to='/Register'
											className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10'
										>
											Get started
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
					<img
						className='h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full'
						src={require('../../images/working-woman-person-technology-7375.jpg')}
						alt='Woman working with technology'
					/>
				</div>
			</div>
		</Fragment>
	);
};

export default Welcome;
