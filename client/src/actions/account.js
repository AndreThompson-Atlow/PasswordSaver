import axios from 'axios';
import { setAlert } from './alert';
import { ADD_ACCOUNT, GET_ACCOUNT, DELETE_ACCOUNT } from './types';

// Add an Account

export const addAccount = ({ login, password, site }) => async (dispatch) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const body = JSON.stringify({ login, password, site });
	try {
		const res = await axios.post('/api/accounts', body, config);
		dispatch({
			type: ADD_ACCOUNT,
			payload: res.data,
		});
		dispatch(setAlert('Password Saved', 'danger'));
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'success')));
		}
	}
};

// Delete Account
export const deleteAccount = (key) => async (dispatch) => {
	try {
		console.log('about to dispatch 1');
		const res = await axios.delete(`/api/accounts/${key}`);
		console.log('about to dispatch');
		dispatch({
			type: DELETE_ACCOUNT,
			payload: res.data,
		});

		dispatch(setAlert('Account Deleted', 'success'));
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'success')));
		}
	}
};

// Get an Array of Accounts and add them to the state

export const getAccount = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/accounts');
		dispatch({
			type: GET_ACCOUNT,
			payload: res.data,
		});
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
		}
	}
};
