import { FETCH_COURSES } from '../actions/actions';

const initialState = {
  courses: [],
  isLoading: true,
  error: null
};

const parseDataValues = (courses) =>{
  // TODO It's necessary identify the user logged to se if he is a course member
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
    default: return state;
  }
};

export default CourseReducer;
