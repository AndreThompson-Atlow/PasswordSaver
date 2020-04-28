import axios from 'axios';
import { setAlert } from './alert';
import { ADD_ACCOUNT, GET_ACCOUNT } from './types';

// Add an Account

export const addAccount = (login, password, site) => async (dispatch) => {
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
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
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
