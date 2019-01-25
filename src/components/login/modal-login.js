import React, { Component } from 'react';
import {Button, Modal, FormGroup, ControlLabel, FormControl, HelpBlock} from "react-bootstrap";
import * as AuthActions from '../../actions/auth-actions'
import {connect} from "react-redux";

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class ModalLogin extends Component {
  constructor (props) {
    super(props);

    this.state = {
      email:'',
      password:''
    }
  }

  handleEmailChange = (value) =>{
    this.setState({email: value.target.value})
  };

  handlePasswordChange = (value) =>{
    this.setState({password: value.target.value})
  };

  handleModalSubmit = () => {
    this.props.onLogin(this.state);
  };

  render () {
    if(this.props.user) {
      return
    }
    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.handleHide}
        container={this}
        bsSize="small"
        aria-labelledby="contained-modal-title">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title">
            Log In
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FieldGroup
              id="formControlsEmail"
              type="email"
              label="Email address"
              onChange={this.handleEmailChange}
              placeholder="Enter email"
            />
            <FieldGroup id="formControlsPassword" label="Password" type="password" onChange={this.handlePasswordChange} />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleHide}>Close</Button>
          <Button onClick={this.handleModalSubmit} bsStyle="primary">Log in</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = state => (
  {
    user: state.authReducer.user,
    error: state.authReducer.error
  }
);

const mapDispatchToProps = dispatch => (
  {
    onLogin: (data) => dispatch(AuthActions.login(data))
  }
);

export default  connect(mapStateToProps, mapDispatchToProps)(ModalLogin)