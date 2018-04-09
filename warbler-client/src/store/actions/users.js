import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_USER } from '../actionTypes';

export const loadUser = userData => ({
  type: LOAD_USER,
  userData
});

export const fetchUserData = (username) => {
  return dispatch => {
    return apiCall('get', `/api/users/${username}`)
    .then((res) => {
      dispatch(loadUser(res));
    })
    .catch(err => {
      dispatch(addError(err.message));
    });
  };
};
