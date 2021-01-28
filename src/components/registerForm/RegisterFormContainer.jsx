import React, { Component } from 'react';
import generateAvatar from './helper';
import { registerUser } from '../../data/user';
import RegisterForm from './RegisterForm';

const initialState = {
  fetchingData: false,
};

class RegisterFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  };
  componentDidMount() {
    this.onChangeAvatar()
  };

  onChangeAvatar = () => {
    const urlAvatar = generateAvatar();
    this.setState({ urlAvatar })
  };

  onSubmit = async (dataForm) => {
    const { history } = this.props;
    this.setState({ fetchingData: true, });
    const avatar = generateAvatar();
    const response = await registerUser({ ...dataForm, avatar })

    if (response) {
      const { data } = response;
      localStorage.setItem('userData', JSON.stringify(data));
      this.setState({ fetchingData: false, });
      history.push('/categories')
    }
    this.setState({ fetchingData: false, })
  };

  render() {
    const { fetchingData, urlAvatar } = this.state;
    return (
      <RegisterForm
        onSubmit={this.onSubmit}
        fetchingData={fetchingData}
        urlAvatar={urlAvatar}
        onChangeAvatar={this.onChangeAvatar}
      />
    )
  };
};

export default RegisterFormContainer;
