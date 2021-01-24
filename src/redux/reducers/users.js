
import { types } from '../actions/users';

const initialState = {
	user: {},
	success: false,
};

const registration = (state = initialState, action) => {
	switch (action.type) {
		case types.SUBMIT_REGISTER: {
			return {
				...state,
				user: action.payload,
				success: true,
			};
		}
		default:
			return state;
	}
}

export default registration;
