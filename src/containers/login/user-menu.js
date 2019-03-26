import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import './style/user-menu.css';
import * as AuthActions from '../../actions/auth-actions';
import { connect } from 'react-redux';

class UserMenu extends Component {
  handleLogout = () => {
    this.props.onLogout();
  };

  render () {
    return (
      <div className={'menu-dropdown'}>
        <DropdownButton title={this.props.user.name} id='dropdown-basic-button'>
          <MenuItem eventKey='settings' >Settings</MenuItem>
          <MenuItem eventKey='dashboard'>My Dashboard</MenuItem>
          <MenuItem eventKey='logout' onClick={this.handleLogout}>Logout</MenuItem>
        </DropdownButton>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    user: state.authReducer.user
  }
);

const mapDispatchToProps = dispatch => (
  {
    onLogout: () => dispatch(AuthActions.logout())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
