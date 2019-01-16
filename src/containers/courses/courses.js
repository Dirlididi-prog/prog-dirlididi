import React, { Component } from 'react';

import PageBar from '../../components/pagination/PageBar';

export default class Courses extends Component {
  render() {
    return (
      <PageBar pages={10} />
    )
  }
}
