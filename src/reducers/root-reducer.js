import { combineReducers } from 'redux';
import ProblemReducer from "./problem-reducer";
import CoursesReducer from './course-reducer';

const RootReducer = combineReducers({
  problemReducer: ProblemReducer,
  coursesReducer: CoursesReducer,
});

export default RootReducer;
