import React, { Fragment, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Welcome from './components/guestPages/Welcome';
import Routes from './components/routing/Routes';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './components/util/setAuthToken';
import { getAccount } from './actions/account';
import { loadUser } from './actions/auth';

function App() {
	useEffect(() => {
		setAuthToken(localStorage.token);
		store.dispatch(getAccount());
		store.dispatch(loadUser());
	}, []);
	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<div className='flex flex-col space-between h-screen m-0 p-0'>
						<Navbar />
						<Switch>
							<Route exact path='/' component={Welcome} />
							<Route component={Routes} />
						</Switch>
						<Footer />
					</div>
				</Fragment>
			</Router>
		</Provider>
	);
}

export default App;
