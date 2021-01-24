import React, { Component } from 'react';
import { Statistic } from 'antd';

import { fetchQuiz } from '../../data/quiz';
import { updateUser } from '../../data/user';
import QuizList from './quizList';

const { Countdown } = Statistic;

const deadline = Date.now() + 1000 * 20 * 5 * 4 * 1 + 1000 * 30; // Moment is also OK
const scoreForEachQuiz = 100;

class QuizContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 1,
      score: 0,
    };
  };

  componentDidMount() {
    this.getQuiz();
  };

  getQuiz = async () => {
    const { match } = this.props;
    const { category, difficulty } = match.params;
    const response = await fetchQuiz({ category, difficulty });
    if (response) {
      this.setState({ quizList: response.data[0], quizQuantity: response.data[0].questions.length })
    }
  };

  onSlide = (answer, correct_answer) => {
    const { quizQuantity } = this.state;

    let { activeIndex, score } = this.state;
    let newActiveIndex = activeIndex + 1;
    if (answer === correct_answer) score += scoreForEachQuiz
    if (newActiveIndex === quizQuantity) this.onFinish();
    this.setState({ activeIndex: newActiveIndex, score });
  };

  onFinish = async () => {
    const { history } = this.props;
    const { score } = this.state;
    const userData = localStorage.getItem('userData');
    const userDataParser = JSON.parse(userData);
    const response = await updateUser({ score, email: userDataParser.email });
    if (response) {
      const { data } = response;
      localStorage.setItem('userData', JSON.stringify(data));
    }
    history.push('/finish');
  };

  render() {
    const { quizList, activeIndex, quizQuantity, score } = this.state;
    return (
      <div>
        <Countdown
          title="hurry up!"
          value={deadline}
          onFinish={() => this.onFinish()}
        />
        {quizList ?
          <QuizList
            quizList={quizList}
            activeIndex={activeIndex}
            onSlide={this.onSlide}
            onFinish={this.onFinish}
            quizQuantity={quizQuantity}
          />
          : null}
      </div>
    )
  };
};

export default QuizContainer;
