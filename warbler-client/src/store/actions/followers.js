import { apiCall } from '../../services/api';
import {addError} from './errors';
import { ADD_FOLLOWER, REMOVE_FOLLOWER, LOAD_FOLLOWERS, LOAD_FOLLOWING } from '../actionTypes';

export const loadFollowers = followers => ({
  type: LOAD_FOLLOWERS,
  followers
});

export const loadFollowing = following => ({
  type: LOAD_FOLLOWING,
  following
});

export const addFollower = (userFollowed_id, currentUser_id) => ({
  type: ADD_FOLLOWER,
  userFollowed_id,
  currentUser_id
});

export const removeFollower = (userFollowed_id, currentUser_id) => ({
  type: REMOVE_FOLLOWER,
  userFollowed_id,
  currentUser_id
});

export const fetchFollowers = (user_id) => {
  return dispatch => {
    return apiCall('get', `/api/users/${user_id}/followers`)
    .then((res) => {
      dispatch(loadFollowers(res));
    })
    .catch(err => {
      dispatch(addError(err.message));
    });
  };
};

export const fetchFollowing = (user_id) => {
  return dispatch => {
    return apiCall('get', `/api/users/${user_id}/following`)
    .then((res) => {
      dispatch(loadFollowing(res));
    })
    .catch(err => {
      dispatch(addError(err.message));
    });
  };
};

export const followUser = (userFollowed_id, currentUser_id) => {
	return dispatch => {
		return apiCall('post', `/api/users/${currentUser_id}/followers/${userFollowed_id}`)
			.then(res => {
				dispatch(addFollower(userFollowed_id, currentUser_id));
			})
			.catch(err => {
				dispatch(addError(err.message));
			});
	}
}

export const unFollowUser = (userFollowed_id, currentUser_id) => {
	return dispatch => {
		return apiCall('delete', `/api/users/${currentUser_id}/followers/${userFollowed_id}`)
			.then(res => {
				dispatch(removeFollower(userFollowed_id, currentUser_id));
			})
			.catch(err => {
				dispatch(addError(err.message));
			})
	}
}
