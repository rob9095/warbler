import { LOAD_COMMENTS, ADD_COMMENT, REMOVE_COMMENT } from '../actionTypes';

const comments = (state = {}, action) => {
  switch(action.type) {
    case LOAD_COMMENTS:
      let newState = state;
      newState[action.message_id] = [...action.comments]
      return newState;
    case ADD_COMMENT:
      let addedState = state;
      addedState[action.message_id] = [...addedState[action.message_id], ...addedState]
      return addedState;
    case REMOVE_COMMENT:
      let removedState = state;
      removedState[action.message_id] = removedState[action.message_id].filter(comment => comment._id !== action.comment_id)
      return removedState;
    default:
      return state;
  }
};

export default comments;
