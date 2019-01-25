import { combineReducers } from 'redux';
import ProblemReducer from './problem';
import CoursesReducer from './course-reducer';
import WelcomeReducer from './welcome-reducer';
import AuthReducer from "./auth-reducer";

const rootReducer = combineReducers({
  problemReducer: ProblemReducer,
  coursesReducer: CoursesReducer,
  welcomeReducer: WelcomeReducer,
  authReducer: AuthReducer
});

export default rootReducer;
