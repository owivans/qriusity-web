import { registerUser } from '../../data/user'

export const types = {
	SUBMIT_REGISTER: 'SUBMIT_REGISTER',
	ERROR_USER: 'ERROR_USER'
};

export const requestSubmitRegister = (payload) => {
	return ({
		type: types.SUBMIT_REGISTER,
		payload,
	})
};

export const submitRegisterAction = (data) => async (dispatch) => {
	try {
		const response = await registerUser(data);
		if (response) {
			dispatch({
				type: types.SUBMIT_REGISTER,
				payload: response.data
			})
		}
	} catch (error) {
		dispatch({
			type: types.ERROR_USER,
			payload: 'User info not loaded'
		})
	}
}

