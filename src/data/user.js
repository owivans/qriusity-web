const axios = require('axios');

exports.registerUser = async (data) => {
	try {
    const url = 'http://localhost:4000/api/user/register';
		const response = await axios.post(url, data);
		return response;
	} catch (error) {
		return error;
	}
};

exports.updateUser = async (data) => {
	try {
    const url = 'http://localhost:4000/api/user/update';
		const response = await axios.put(url, data);
		return response;
	} catch (error) {
		return error;
	}
};

exports.getMiniorUserRanksByScore = async ({ userScore }) => {
	try {
    const url = `http://localhost:4000/api/user/score?userScore=${userScore}`;
		const response = await axios.get(url);
		return response;
	} catch (error) {
		return error;
	}
};
