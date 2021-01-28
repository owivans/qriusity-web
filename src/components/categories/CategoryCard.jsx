import React from 'react';
import './style.scss';

const CategortCard = ({ details, onSelectCategory, }) => {
  const { name, path, available } = details;
  return (
    <div className='category-main'>
      <div
        className={`content category__${path} ${!available && 'no-available'}`}
        onClick={() => onSelectCategory(path)}
      >
      </div>
        <div className='title'>{available ? name : 'Comming soon'}</div>
    </div>

  )
};

export default CategortCard;
