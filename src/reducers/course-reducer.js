import * as actionTypes from '../actions/actions';

const initialState = {
  courses: [],
  isLoading: true,
  error: null
};

const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_COURSES:
      return {
        error: null,
        isLoading: false,
        cources: action.courses
      };
    default: return state
  }
};

export default CourseReducer;
