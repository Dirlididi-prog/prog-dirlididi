import React, { Component } from "react";
import "./style/nav-bar.css";
import {Nav, Navbar, NavItem} from "react-bootstrap";
import Router from "../../config/router";
import {Link} from "react-router-dom";

const menuItems = {courses: "Courses", problems: "Problems", ide: "Ide"};

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activated: ""
    };
  }

  handleSelect = (selectedKey) => {
    this.setState({activated: selectedKey})
  };

  render() {
    const navItems = Object.keys(menuItems).map((key) =>{
      return(
        <NavItem componentClass="span" id="navItem" active={key === this.state.activated} key={key} eventKey={key}>
          <Link id="link" to={"/"+key}> {menuItems[key]} </Link>
        </NavItem>
      )
    });

    return (
      <Navbar id="menu">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/" id="iconHome">
              <span>
                <i className="fa fa-home" aria-hidden="true" />
              </span>
              <span> Dirlididi</span>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse >
          <Nav pullRight onSelect={key => this.handleSelect(key)} >
            {navItems}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Menu;
