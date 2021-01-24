
import axios from 'axios';
import { CONNECTIONS } from '../config';

const { QRIUSITY_API } = CONNECTIONS;

export const registerUser = async (data) => {
	try {
    const url = `${QRIUSITY_API}/user/register`;
		const response = await axios.post(url, data);
		return response;
	} catch (error) {
		return error;
	}
};

export const updateUser = async (data) => {
	try {
    const url = `${QRIUSITY_API}/user/update`;
		const response = await axios.put(url, data);
		return response;
	} catch (error) {
		return error;
	}
};

export const getMiniorUserRanksByScore = async ({ userScore }) => {
	try {
    const url = `${QRIUSITY_API}/user/score?userScore=${userScore}`;
		const response = await axios.get(url);
		return response;
	} catch (error) {
		return error;
	}
};
