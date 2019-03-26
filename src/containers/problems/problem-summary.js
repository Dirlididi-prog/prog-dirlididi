import React, { Component } from 'react';
import { Badge, Button, PageHeader } from 'react-bootstrap';

import { TEST_HEADERS_TABLE } from '../../constants/problem-constants';
import Table from '../../components/table/table';
import './style/problems.css';

class ProblemSummary extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.props.history.push({
      pathname: `/ide/${this.props.location.state.key}`,
      state: this.props.location.state
    });
  }

  render () {
    let key, description, tip;

    const tags = this.props.location.state.tags.map((tag) => {
      if (tag !== null && tag !== '') {
        return (
          <Badge id='tag-badge' variant='primary'>{tag}</Badge>
        );
      }
    });

    if (this.props.location.state.key) {
      key = <h4>{`Key: ${this.props.location.state.key}`}</h4>;
    }

    if (this.props.location.state.description) {
      description = <h4>{this.props.location.state.description}</h4>;
    }

    if (this.props.location.state.tip) {
      tip = <h4>{`Tip: ${this.props.location.state.tip}`}</h4>;
    }

    return (
      <div className='show-problem-container'>
        <PageHeader id='show-problem-pg-h'>{this.props.location.state.name}</PageHeader>
        <div id='tags-prop'>{tags}</div>
        <div>{key}</div>
        <div>{description}</div>
        <div>{tip}</div>
        <Table
          headers={TEST_HEADERS_TABLE}
          data={this.props.location.state.tests}
          useAsKey={'description'} />
        <Button id='solve-btn' bsStyle='primary' className='pull-right' onClick={this.handleClick}>
          Solve
        </Button>
      </div>
    );
  }
}

export default ProblemSummary;
