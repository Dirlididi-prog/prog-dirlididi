import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './header.css';
import { Button } from 'react-bootstrap';

export default class Header extends Component {
  render () {
    const headerStyle = {
      backgroundImage: `url(${this.props.backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: '50%'
    };

    return (
      <header className='header' style={headerStyle}>
        <div className='header-body'>
          <div className='header-title'>
            <span>
              <em>{this.props.firstTitle}</em>
              <br />
              <em>{this.props.secondTitle}</em>
            </span>
          </div>
          {this.props.children}
          <p>
            <Button
              bsStyle='primary'
              href={`#${this.props.buttonToggle}`}
              className={'btn btn-primary btn-xl header-button'}>
              {this.props.buttonTitle}
            </Button>
          </p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  children: PropTypes.object.isRequired,
  firstTitle: PropTypes.string.isRequired,
  secondTitle: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired
};
