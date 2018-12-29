import React from 'react';
import PropTypes from 'prop-types';

class DefaultErrorBoundary extends React.Component {
  state = {
    isError: false
  };
  static propTypes = {
    children: PropTypes.node.isRequired
  };
  static getDerivedStateFromError() {
    return { isError: true };
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;
    return isError ? <div>ERROR</div> : children;
  }
}

export default DefaultErrorBoundary;
