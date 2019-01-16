import React, { Component } from 'react';
import {connect} from "react-redux";
import * as problemAction from "../../actions/problem";


class Problems extends Component {

  render() {
    if (this.props.isLoading) {
      return (<div className="spinner"/>)
    }

    console.log(this.props.problems);
    return(
      <div>
        Problems
      </div>
    )
  }

  componentDidMount () {
    this.props.onInitProblems()
  }
}

const mapStateToProps = state => (
  {
    problems: state.problemReducer.problems,
    isLoading: state.problemReducer.isLoading,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onInitProblems: () => dispatch(problemAction.initProblems()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Problems)

