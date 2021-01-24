import React, { Component } from 'react';
import { registerUser } from '../../data/user';
import RegisterForm from './RegisterForm';


const initialState = {
	fetchingData: false,
};

const urlAvatar =`https://avatars.dicebear.com/api/human/${Math.random()}.svg`;

class RegisterFormContainer extends Component {
	constructor(props) {
		super(props);
		this.state = { ...initialState };
	};

onSubmit = async(dataForm) => {
		const { history } =this.props;
		this.setState({ fetchingData: true,})
		const response = await registerUser({...dataForm, avatar: urlAvatar })

		if(response) {
			const { data } = response;
			localStorage.setItem('userData', JSON.stringify(data));
			this.setState({ fetchingData: false,});
			history.push('/categories')
		}
		this.setState({ fetchingData: false,})
	};

	render() {
		const { fetchingData } = this.state;
		return (
			<RegisterForm
				onSubmit={this.onSubmit}
				fetchingData={fetchingData}
				urlAvatar={urlAvatar}
			/>
		)
	};
};

export default RegisterFormContainer;
