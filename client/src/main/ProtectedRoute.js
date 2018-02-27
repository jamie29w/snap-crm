import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

class ProtectedRoute extends React.Component {
  render() {
    const isAuthenticated = this.props.isAuthenticated;
    const Component = this.props.component;
    const path = this.props.path;
    return isAuthenticated || localStorage.getItem('token') ? (
      <Route path={path} component={Component} />
    ) : (
      <Redirect to="/signin" />
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {})(ProtectedRoute);
