import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from '../layouts/NotFound';
import EasyAccess from '../guestPages/EasyAccess';
import Login from '../guestPages/Login';
import Register from '../guestPages/Register';
import SecurePasswords from '../guestPages/SecurePasswords';
import Alert from '../layouts/Alert';
import Dashboard from '../protectedPages/Dashboard';
import PrivateRoute from '../routing/PrivateRoute';
import NewPassword from '../protectedPages/NewPassword';
import GenPassword from '../protectedPages/GenPassword';

const Routes = (props) => {
	return (
		<Fragment>
			<Alert />
			<Switch>
				<Route exact path='/EasyAccess' component={EasyAccess} />
				<Route exact path='/Login' component={Login} />
				<Route exact path='/Register' component={Register} />
				<Route exact path='/SecurePasswords' component={SecurePasswords} />
				<PrivateRoute exact path='/Dashboard' component={Dashboard} />
				<PrivateRoute
					exact
					path='/Dashboard/AddPassword'
					component={NewPassword}
				/>
				<PrivateRoute
					exact
					path='/Dashboard/GenPassword'
					component={GenPassword}
				/>
				<Route component={NotFound} />
			</Switch>
		</Fragment>
	);
};

export default Routes;
