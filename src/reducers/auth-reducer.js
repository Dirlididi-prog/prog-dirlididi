import * as actionType from '../actions/actions';

const initialState = {
  authorization: null,
  user: null,
  error: null
};

const authSuccess = (state, action) => (
  {
    ...state,
    user: action.user,
    authorization: action.authorization,
    error: null
  }
);

const authFail = (state, action) => (
  {
    ...state,
    error: action.error
  }
);

const authLogout = (state) => (
  {
    ...state,
    authorization: null,
    user: null
  }
);

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionType.AUTH_FAIL:
      return authFail(state, action);
    case actionType.AUTH_LOGOUT:
      return authLogout(state);
    default:
      return state;
  }
};

export default AuthReducer;
