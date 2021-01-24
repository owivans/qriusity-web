import React, { Component } from 'react';
import QuizList from '../../quizList'
import Navbar from '../../navbar';


class QuizView extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<div className='finish-view'>
				<Navbar />
				<QuizList {...this.props} />
			</div>
		)
	}
};

export default QuizView;