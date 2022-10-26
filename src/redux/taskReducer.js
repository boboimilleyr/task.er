import { GET_TASKS_DONE } from './constants';

const taskReducer = (state = [], action) => {
  switch(action.type) {
    case GET_TASKS_DONE:
      return action.payload;
    default:
      return state;
  }
}

export default taskReducer;