import { fetchPost } from '../shared/utility';
import * as action from './actions';

const authSuccess = user => (
  {
    type: action.AUTH_SUCCESS,
    user: user
  }
);

const authFail = error => (
  {
    type: action.AUTH_FAIL,
    error: error
  }
);

export const checkState = () =>
  dispatch => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      dispatch(logout());
    } else {
      dispatch(authSuccess(user));
    }
  }
;

export const logout = () => {
  localStorage.removeItem('user');
  return {
    type: action.AUTH_LOGOUT
  };
};

export const login = (data) =>
  dispatch => {
    fetchPost('/auth', data)
      .then(user => {
        if (user.error) {
          dispatch(authFail(user.error));
        } else {
          localStorage.setItem('user', JSON.stringify(user));
          dispatch(authSuccess(user));
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
;
