import React, { Component } from 'react';

import Menu from './menu/menu';
import Router from '../config/router';
import Footer from './footer/footer';

export default class App extends Component {
  render () {
    return (
      <div>
        <Menu />
        <Router />
        <Footer />
      </div>
    );
  }
}
