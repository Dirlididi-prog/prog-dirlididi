import * as actionTypes from '../actions/actions';

const initialState = {
  problems: [],
  isLoading: true,
  error: null
};

const ProblemReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_PROBLEMS:
      return {
        error: null,
        isLoading: false,
        problems: action.problems
      };
    case action.CREATE_PROBLEM:
      return {
        ...state,
        problem: {
          name: action.name,
          description: action.description,
          tip: action.tip,
          tags: action.tags,
          tests: action.tests
        }
      };
    default: return state;
  }
};

export default ProblemReducer;
