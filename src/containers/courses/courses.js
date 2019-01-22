import React, { Component } from 'react';
import { connect } from "react-redux";
import Table from '../../components/table/table'
import * as courseAction from "../../actions/course-action";
import './style/courses.css';
import Spinner from "../../components/spinner/spinner";


class Courses extends Component {

  HEADERS_TABLE = {
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

  render() {
    const table = (this.props.isLoading) ? <Spinner />
                  : <Table headers={this.HEADERS_TABLE} data={this.props.courses} />
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