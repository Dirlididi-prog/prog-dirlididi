import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './menu.css';

const ITEMS_MENU = { courses: 'Courses', problems: 'Problems', ide: 'Ide' };

class Menu extends Component {
  constructor (props) {
    super(props);

    this.state = {
      activated: window.location.pathname
    };
  }

  handleSelect = (selectedKey) => {
    this.setState({ activated: selectedKey });
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
          <Nav pullRight onSelect={key => this.handleSelect(`/${key}`)} >
            {navItems}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Menu;
