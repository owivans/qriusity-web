import React, { Component } from 'react';

import Categories from '../../categories';
import Navbar from '../../navbar';

class RegisterView extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { categories } = this.state;
    const { history } = this.props;
    return (
      <>
        <Navbar />
        <Categories categories={categories} history={history} />
      </>
    )
  }
};

export default RegisterView;
