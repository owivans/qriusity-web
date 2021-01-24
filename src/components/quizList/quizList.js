import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import QuizItem from '../categories/quizItem';

const QuizList = ({
  quizList,
  activeIndex,
  onSlide,
  quizQuantity
}) => {
  const items = quizList.questions.map((quizInformation, index) => {
    return (
      <div>
        <span>{`${index} / ${quizQuantity}`}</span>
        <QuizItem quizInformation={quizInformation} onSlide={onSlide} />
      </div>
    )
  });

  if (quizList.questions) {
    return (
      <div>
        <AliceCarousel
          touchTracking
          disableDotsControls
          disableButtonsControls
          items={items}
          activeIndex={activeIndex}
        />
      </div>
    )
  }
};
export default QuizList;
