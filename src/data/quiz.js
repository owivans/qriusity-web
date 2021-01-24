import axios from 'axios';
import { CONNECTIONS } from '../config';

const { QRIUSITY_API } = CONNECTIONS;

export const fetchQuiz = async (data) => {
	try {
    const { category, difficulty } = data;
    const url = `${QRIUSITY_API}/quiz/filter?category=${category}&difficulty=${difficulty}`;
		const response = await axios.get(url);
		return response;
	} catch (error) {
		return error;
	}
};


