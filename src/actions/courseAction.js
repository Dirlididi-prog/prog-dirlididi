import * as action from './actions';
import { fetchGet } from '../shared/utility'

export const getCourses = () => {
  return dispatch => {
    fetchGet('/api/course/')
      .then(courses => {
        dispatch({ type: action.GET_COURSES, courses: courses });
      })
      .catch(error => {
        console.log(error)
      })
  }
};