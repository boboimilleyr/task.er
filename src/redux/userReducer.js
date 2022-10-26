import {
  GET_USERS_DONE
} from './constants';

const userReducer = (state = [], action) => {
  switch(action.type) {
    case GET_USERS_DONE:
      return action.payload;
    default:
      return state;
  }
}

export default userReducer;