import { combineReducers } from 'redux';
import ProblemReducer from './problem-reducer';
import CoursesReducer from './course-reducer';
import WelcomeReducer from './welcome-reducer';

const RootReducer = combineReducers({
  problemReducer: ProblemReducer,
  coursesReducer: CoursesReducer,
  welcomeReducer: WelcomeReducer
});

export default RootReducer;
