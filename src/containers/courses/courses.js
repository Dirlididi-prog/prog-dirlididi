import React, { Component } from 'react';
import {connect} from "react-redux";
import Table from '../../components/utils/table'
import * as courseAction from "../../actions/courseAction";
import './style/courses.css';

class Courses extends Component {

  headers = {
    name: 'Course',
    users: 'Users',
    owner: 'Owner',
    date: 'Created at',
    enrolled: 'Enrolled',
    actions: 'Actions' // check how we're going to deal with solving
  };

  componentDidMount() {
    this.props.onInitCourses()
  }

  renderContent() {
    if (this.props.isLoading) {
      return (<div className="spinner" />)
    }

    return (<Table headers={this.headers} data={this.props.courses} />)
  };

  render() {
    return (
      <div className='course-container'>
        {this.renderContent()}
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    courses: state.coursesReducer.courses,
    isLoading: state.coursesReducer.isLoading,
  }
);

const mapDispatchToProps = dispatch => (
  {
    onInitCourses: () => dispatch(courseAction.getCourses()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Courses)
