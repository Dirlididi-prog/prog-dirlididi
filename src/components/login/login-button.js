import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Button } from 'react-bootstrap';

import './login-button.css';

class LoginButton extends Component {
  render () {
    return (
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        render={renderProps => (
          <Button
            bsStyle={'primary'}
            className={'button-login'}
            onClick={renderProps.onClick}>
            { 'Log in / Sign Up'}
          </Button>
        )}
        cookiePolicy={'single_host_origin'}
        onSuccess={this.props.handleLoginSuccess}
        onFailure={this.props.handleLoginFail} />
    );
  }
}

export default LoginButton;
