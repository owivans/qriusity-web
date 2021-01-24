import React, { Component } from 'react';

import QuizItem from './QuizItem';  

class QuizItemContainer extends Component {
    constructor(props){
        super(props);
        this.state = {};
		};

    render(){
        const { quizInformation, onSlide } = this.props;
        return <QuizItem quizInformation={quizInformation} onSlide={onSlide}  />
    };
};

export default QuizItemContainer;