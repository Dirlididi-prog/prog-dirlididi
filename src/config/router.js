import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from '../containers/welcome/welcome';
import Courses from '../containers/courses/courses';
import AddCourse from '../containers/courses/add-course';
import ProblemCollection from '../containers/problems/problem-collection';
import ProblemSummary from '../containers/problems/problem-summary';
import AddProblem from '../containers/problems/add-problem';
import Ide from '../components/ide/ide';
import './router.css';

const Router = () => {
  return (
    <div className={'router-body'}>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route path='/courses' component={Courses} />
        <Route exact path='/problems' component={ProblemCollection} />
        <Route path='/problems/:key' component={ProblemSummary} />
        <Route path='/ide' component={Ide} />
        <Route path='/addProblem' component={AddProblem} />
        <Route path='/addCourse' component={AddCourse} />
      </Switch>
    </div>
  );
};

export default Router;
