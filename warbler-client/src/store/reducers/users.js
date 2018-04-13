import { LOAD_USER } from '../actionTypes';

const user = (state = {}, action) => {
  switch(action.type) {
    case LOAD_USER:
      return { ...state, userData: action.userData };
    default:
      return state;
  }
};

export default user;
