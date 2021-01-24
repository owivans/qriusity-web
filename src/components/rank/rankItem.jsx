import React from 'react';

import Avatar from '../avatar/avatar';
import iconCup from '../../img/cupIcon.svg';
import './style.scss';

const RankItem = ({ userData, first }) => {
  const { score, name, avatar } = userData;
  return (
    <div className={`rank-item-container ${first ? 'slide-in-left' : 'slide-in-left-first'}`}>
      <div className='rank-item-container__avatar'>
        <Avatar src={avatar} size={50} />
      </div>
      <div className='rank-item-container__content'>
        <div className='rank-item-container__content__name'>{name}</div>
        <div className='rank-item-container__content__score'>
          <img src={iconCup} alt="iconCup" width='20' />
          {score} <span className='label'>pts</span>
        </div>
      </div>
    </div>
  )
};

export default RankItem;
