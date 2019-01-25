import React, { Component } from 'react';
import './menu.css';
import {Button, Nav, Navbar, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ModalLogin from "../login/modal-login";

const ITEMS_MENU = { courses: 'Courses', problems: 'Problems', ide: 'Ide' };

class Menu extends Component {
  constructor (props) {
    super(props);

    this.state = {
      activated: window.location.pathname,
      showModal: false
    };
  }

  handleSelect = (selectedKey) => {
    this.setState({ activated: selectedKey });
  };

  handleModalHide = () => {
    this.setState({ showModal: false });
  };

  render () {
    const navItems = Object.keys(ITEMS_MENU).map((key) => {
      return (
        <NavItem componentClass='span' active={`/${key}` === this.state.activated} key={key} eventKey={key}>
          <Link to={'/' + key}> {ITEMS_MENU[key]} </Link>
        </NavItem>
      );
    });

    return (
      <div>
        <Navbar className='menu'>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/' onClick={node => this.handleSelect(node.currentTarget.pathname)}>
                <span className='menu-logo'> Dirlididi</span>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse >
            <Nav onSelect={key => this.handleSelect(`/${key}`)} >
              {navItems}
            </Nav>
            <Button
              bsStyle={'primary'}
              className={'button-login'}
              onClick={() => this.setState({ showModal: true })}>
              { 'Log in / Sing Up'}
            </Button>
          </Navbar.Collapse>
        </Navbar>
        <ModalLogin showModal={this.state.showModal} handleHide={this.handleModalHide}/>
      </div>
    );
  }
}

export default Menu;
