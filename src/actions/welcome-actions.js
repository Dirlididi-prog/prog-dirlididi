import { INIT_WELCOME } from './actions';
import request from '../api/request';

export const initWelcome = () => {
  return (dispatch) =>
    request.get('/info')
      .then(data => dispatch({ type: INIT_WELCOME, data: data }))
      .catch(error => console.log(error));
};
