import React, { Component } from 'react';

import RegisterForm from '../../registerForm';
import Navbar from '../../navbar';

class RegisterView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			routing: false,
		}
	}

	render() {
		const { history } = this.props;
		return (
			<>
				<Navbar />
				<RegisterForm history={history} />
			</>
		)
	}
};

export default RegisterView;
