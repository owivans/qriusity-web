import React, { Component } from 'react';

import Categories from './Categories';

const initialState = {
	isShowCategories: true,
	categories: [
		{
			name: 'Science: Computer',
			path:'ScienceComputers',
			available: true,
		},
		{
			name: 'Films',
			path: 'films',
			available: true,
		},
		{
			name: 'Videogames',
			path: 'videogames',
			available: false,
		},
		{
			name: 'Music',
			path: 'music',
			available: false,
		},
	],
	difficultyLevels: [
		{ name: 'easy'},
		{ name: 'medium'},
		{ name: 'hard'}
	]
};

class CategoriesContainer extends Component {
	constructor(props) {
		super(props)
		this.state = initialState;
	};

	onSelectCategory = (category) => {
		this.setState({
			isShowDifficulty: true,
			isShowCategories: false,
			categorySelected: category
		})
	};

	onBack = () => {
		const { isShowDifficulty, isShowCategories} = this.state;
		this.setState({
			isShowDifficulty: !isShowDifficulty,
			isShowCategories: !isShowCategories
		})
	};

	onFinish = (data) => {
		const {
			categorySelected,
			difficultySelected
		} = data;
		const { history } = this.props;
		history.push(`/quiz/${categorySelected}/${difficultySelected}`);
	};

	render() {
		const {
			categories,
			isShowDifficulty,
			isShowCategories,
			categorySelected,
			difficultyLevels,
		} = this.state;

		return (
			<Categories
				categories={categories}
				difficultyLevels={difficultyLevels}
				isShowDifficulty={isShowDifficulty}
				isShowCategories={isShowCategories}
				categorySelected={categorySelected}
				onSelectCategory={this.onSelectCategory}
				onBack={this.onBack}
				onFinish={this.onFinish}
			/>
		)
	}
};

export default CategoriesContainer;
