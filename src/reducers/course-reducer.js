import { FETCH_COURSES, CREATE_COURSE } from '../actions/actions';

const initialState = {
  courses: [],
  isLoading: true,
  error: null
};

const parseDataValues = (courses) => {
  // TODO It's necessary identify the user logged in to see if he is a course member
  return courses.map(course => {
    course.members = course.members.length;
    return course;
  });
};

const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      return {
        error: null,
        isLoading: false,
        courses: parseDataValues(action.courses)
      };
    case CREATE_COURSE:
      return {
        ...state,
        course: action.course
      };
    default: return state;
  }
};

export default CourseReducer;
