import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as AuthActions from '../../actions/auth-actions';
import LoginButton from '../../components/login/login-button';
import UserMenu from './user-menu';

/* global localStorage */

class Login extends Component {
  handleLoginSuccess = (response) => {
    localStorage.setItem('user', JSON.stringify(response.profileObj));
    this.props.onLogin({ tokenId: response.tokenId });
  };

  handleLoginFail = (response) => {
    console.log(response);
  };

  storeAuth = (authentication) => {
    localStorage.setItem('authorization', authentication);
  };

  componentDidMount () {
    this.props.onTryAutoConnect();
  }

  render () {
    const authorization = this.props.authorization;

    if (authorization) {
      if (!localStorage.getItem('authorization')) this.storeAuth(authorization);
      return <UserMenu />;
    }

    return (
      <LoginButton
        handleLoginSuccess={this.handleLoginSuccess}
        handleLoginFail={this.handleLoginFail} />
    );
  }
}

const mapStateToProps = state => (
  {
    authorization: state.authReducer.authorization,
    error: state.authReducer.error
  }
);

const mapDispatchToProps = dispatch => (
  {
    onLogin: (data) => dispatch(AuthActions.login(data)),
    onTryAutoConnect: () => dispatch(AuthActions.tryAutoConnect())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
