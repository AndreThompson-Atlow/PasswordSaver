import { GET_ACCOUNT, ADD_ACCOUNT } from '../actions/types';

const initialState = {
	accounts: [],
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case ADD_ACCOUNT:
		case GET_ACCOUNT:
			return {
				...state,
				accounts: payload,
			};
		default:
			return state;
	}
}
