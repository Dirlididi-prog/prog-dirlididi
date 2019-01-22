import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from "../containers/welcome/welcome";
import Course from "../containers/courses/course";
import Problem from "../containers/problems/problem";
import Ide from "../components/ide/ide";
import "./router.css"

const Router = () => {
  return (
    <div className={"router-body"}>
      <Switch>
        <Route exact path="/" component={Welcome}/>
        <Route path="/courses" component={Course}/>
        <Route path="/problems" component={Problem}/>
        <Route path="/ide" component={Ide}/>
      </Switch>
    </div>
  );
};

export default Router;
