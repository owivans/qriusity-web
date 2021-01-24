import React, { Component } from 'react';

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.changeComponent(component);
    }

    changeComponent = (component) => {
      this.setState({
        component,
      });
    };

    render() {
      const { component } = this.state;
      const DynamicComponent = component;

      // eslint-disable-next-line react/jsx-props-no-spreading
      return DynamicComponent ? <DynamicComponent {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
