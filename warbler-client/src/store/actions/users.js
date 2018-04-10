import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_USER } from '../actionTypes';

export const loadUser = userData => ({
  type: LOAD_USER,
  userData
});

export function fetchUserData(username) {
	return dispatch => {
		return new Promise((resolve,reject) => {
			return apiCall('get', `/api/users/${username}`)
			.then((res) => {
			  dispatch(loadUser(res));
			  resolve();
			})
			.catch(err => {
			  dispatch(addError(err.message));
			  reject();		  
			})
		});
	}
};
