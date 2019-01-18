import React, { Component } from 'react';
import { connect } from "react-redux";
import Table from '../../components/utils/table'
import * as courseAction from "../../actions/course-action";
import './style/course.css';

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

  // renderContent() {
  //   if (this.props.isLoading) {
  //     return (<div className="spinner" />)
  //   }

  //   return (<Table headers={this.headers} data={this.props.courses} />)
  // };

  render() {
    const table = (this.props.isLoading) ? <div className="spinner" /> 
                  : <Table headers={this.headers} data={this.props.courses} />
    return (
      <div className='course-container'>
        {table}
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
