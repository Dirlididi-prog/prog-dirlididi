import { fetchPost } from '../shared/utility';
import { AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } from './actions';

/* global localStorage */

const authSuccess = data => (
  {
    ...data,
    type: AUTH_SUCCESS
  }
);

const authFail = error => (
  {
    type: AUTH_FAIL,
    error: error
  }
);

export const tryAutoConnect = () => {
  return dispatch => {
    const authorization = localStorage.getItem('authorization');
    if (!authorization) {
      logout();
    } else {
      const user = JSON.parse(localStorage.getItem('user'));
      dispatch(authSuccess({ authorization: authorization, user: user }));
    }
  };
};

export const logout = () => {
  return dispatch => {
    localStorage.removeItem('authorization');
    localStorage.removeItem('user');
    dispatch({ type: AUTH_LOGOUT });
  };
};

export const login = (data) => {
  return dispatch => {
    const user = JSON.parse(localStorage.getItem('user'));
    fetchPost('/auth', data)
      .then(authorization => dispatch(authSuccess({
        authorization: authorization['jwt'],
        user: user })))
      .catch(error => dispatch(authFail(error)));
  };
};
