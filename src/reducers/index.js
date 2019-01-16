import { combineReducers } from 'redux';
import ProblemReducer from "./problem";

const rootReducer = combineReducers({
  problemReducer: ProblemReducer
});

export default rootReducer;
