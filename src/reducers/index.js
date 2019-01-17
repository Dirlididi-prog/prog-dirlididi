import { combineReducers } from "redux";
import ProblemReducer from "./problem";
import CoursesReducer from './coursesReducer';
import WelcomeReducer from "./welcome-reducer";

const rootReducer = combineReducers({
  problemReducer: ProblemReducer,
  coursesReducer: CoursesReducer,
  welcomeReducer: WelcomeReducer,
});

export default rootReducer;
