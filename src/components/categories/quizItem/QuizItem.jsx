import React from 'react';
import { Button } from 'antd';

import './style.scss';

const QuizItem = ({ quizInformation, onSlide }) => {
	const {
    question,
    correct_answer,
    incorrect_answers
  } = quizInformation;
	const answers = [
    correct_answer,
    ...incorrect_answers
  ];
	return (
		<div className='quiz-item-container fade-in'>
			<div className='quiz-item'>
			<h2 className='question'>{question}</h2>
			<div className='answer-content'>
				<div className='answers'>
					{answers.map((answer) => (
            <Button
              onClick={() => onSlide(answer, correct_answer)}
              type="primary">{answer}
            </Button>
					))}
				</div>
			</div>
			</div>
		</div>
	)
};

export default QuizItem;
