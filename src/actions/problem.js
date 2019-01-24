import { CREATE_PROBLEM, UPDATE_PROBLEM, DELETE_PROBLEM, INIT_PROBLEMS, CREATE_FAIL } from './actions';
import request from '../api/request';

export const createProblem = (problem) => {
  return (dispatch) =>
    request.post(`/problem`, problem)
      .then(problem => {
        if (problem.error) {
          dispatch(createFail(problem.error));
        }
        dispatch({ type: CREATE_PROBLEM, problem: problem });
      })
      .catch(error => console.log(error));
};

export const updateProblem = (problemId, body) => {
  return (dispatch) =>
    request.put(`/problem/${problemId}`, body)
      .then(problem => dispatch({ type: UPDATE_PROBLEM, problem: problem }))
      .catch(error => console.log(error));
};

export const deleteProblem = (problemId) => {
  return (dispatch) =>
    request.delete(`/problem/${problemId.join(',')}`)
      .then(dispatch({ type: DELETE_PROBLEM, problemID: problemId }))
      .catch(error => console.log(error));
};

export const fetchProblems = () => {
  return (dispatch) =>
    request.get('/problem')
      .then(problems => dispatch({ type: INIT_PROBLEMS, problems: problems.data }))
      .catch(error => console.log(error));
};

const createFail = error => (
  {
    type: CREATE_FAIL,
    error: error
  }
);
