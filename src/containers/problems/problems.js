import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as problemAction from '../../actions/problem';
import Table from '../../components/table/table';
import './style/problems.css';
import Spinner from '../../components/spinner/spinner';
import { HEADERS_TABLE } from '../../constants/problem-constants';

class Problems extends Component {
  render () {
    if (this.props.isLoading) {
      return <Spinner />;
    }

    return (
      <div className='problems-container'>
        <Table
          headers={HEADERS_TABLE}
          data={this.props.problems}
          useAsKey={'key'} />
      </div>
    );
  }

  componentDidMount () {
    this.props.onInitProblems();
  }
}

const mapStateToProps = state => (
  {
    problems: state.problemReducer.problems,
    isLoading: state.problemReducer.isLoading
  }
);

const mapDispatchToProps = dispatch => (
  {
    onInitProblems: () => dispatch(problemAction.initProblems())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Problems);
