const axios = require('axios');

exports.fetchQuiz = async (data) => {
	try {
		const { category, difficulty } = data
		const response = await axios.get(`http://localhost:4000/api/quiz/filter?category=${category}&difficulty=${difficulty}`);
		return response;
	} catch (error) {
		return error;
	}
};


