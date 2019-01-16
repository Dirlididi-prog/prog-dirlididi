import React, { Component } from 'react';

import { Pagination } from "react-bootstrap";

export default class PageBar extends Component {
  activatedPage = 1;

  constructor(props) {
    super(props);

    this.state = { pages: props.pages };
  }

  renderItems = () => {
    let items = [];
    items.push(<Pagination.Prev key="previous"/>);
    for (let number = 1; number <= this.state.pages; number++) {
      items.push(
        <Pagination.Item active={number === this.activatedPage} key={number}>{number}</Pagination.Item>
      );
    }
    items.push(<Pagination.Next key="next"/>);
    return items;
  }

  render() {
    return (
      <div className="row text-center">
        <Pagination>{this.renderItems()}</Pagination>
      </div>
    );
  }
}
