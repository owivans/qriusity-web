import React, { Component } from 'react';
import Rank from '../../rank'
import Navbar from '../../navbar/Navbar';

class FinishView extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<>
			<Navbar {...this.props}/>
			<Rank />
			</>
		)
	}
};

export default FinishView;
