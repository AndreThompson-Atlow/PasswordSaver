import { GET_ACCOUNT, ADD_ACCOUNT, DELETE_ACCOUNT } from '../actions/types';

const initialState = {
	accounts: [],
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_ACCOUNT:
		case DELETE_ACCOUNT:
		case ADD_ACCOUNT:
			return {
				...state,
				accounts: payload,
			};

		default:
			return state;
	}
}
