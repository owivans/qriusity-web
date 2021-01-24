import React from 'react';
import {
  PageHeader,
  Row,
  Col,
  Button
} from 'antd';

import CategoryCard from './CategoryCard';

import './style.scss';

const Categories = ({
  categories,
  difficultyLevels,
  isShowCategories,
  isShowDifficulty,
  categorySelected,
  onSelectCategory,
  onBack,
  onFinish
}) => (
    <div className='categories-view'>
      <div className='category-container'>
        {isShowDifficulty ?
          <div className='difficulty-container'>
            <h2 className='title-section-secondary header'>{categorySelected}</h2>
            <h2 className='title-section'>Select difficulty:</h2>
            <div className='options'>
              {difficultyLevels.map(({ name }) => (
                <Button
                  onClick={() => onFinish({
                    categorySelected,
                    difficultySelected: name
                  })}
                >
                  {name}
                </Button>
              ))}
            </div>
          </div> : null}

        <Row gutter={[64, 64]}>
          {!isShowDifficulty ?
            <Col span={24}>
              <h1 className='header'>Select a category!</h1>
            </Col> : null }

          {categories.length > 0
            && isShowCategories
            && categories.map(({ name, available, path }) => (
              <Col span={6}>
                <CategoryCard
                  key={name}
                  details={{ name, available, path }}
                  onSelectCategory={onSelectCategory}
                  onBack={onBack}
                />
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );

export default Categories;
