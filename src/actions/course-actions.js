import { FETCH_COURSES, CREATE_COURSE, CREATE_FAIL } from './actions';
import { fetchGet, fetchPost } from '../shared/utility';

export const fetchCourses = () => {
  return dispatch => {
    fetchGet('/course')
      .then(courses => dispatch({ type: FETCH_COURSES, courses: courses }))
      .catch(error => console.log(error));
  };
};

export const postCourse = (course) => {
  return dispatch => (
    fetchPost(`/course`, course)
      .then(course => {
        if (course.error) {
          dispatch(createFail(course.error));
        } else {
          dispatch({ type: CREATE_COURSE, course: course });
        }
      })
      .catch(error => {
        console.log(error);
      })
  );
};

const createFail = error => (
  {
    type: CREATE_FAIL,
    error: error
  }
);
