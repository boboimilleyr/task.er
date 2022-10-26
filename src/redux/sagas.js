import { takeEvery, put } from 'redux-saga/effects';
import {
  GET_TASKS,
  GET_TASKS_DONE,
  GET_USERS,
  GET_USERS_DONE
} from './constants';

function* getUsers() {
  let users = yield fetch(`http://localhost:3030/users`);
  users = yield users.json();
  yield put({type: GET_USERS_DONE, payload: users});
}

function* getTasks({filter}) {
  let tasks;
  
  if(filter) {
    tasks = yield fetch(`http://localhost:3030/tasks?category=${filter}`);
  } else {
    tasks = yield fetch(`http://localhost:3030/tasks`);
  }

  tasks = yield tasks.json();
  
  yield put({type: GET_TASKS_DONE, payload: tasks})
}

function* watcherSaga() {
  yield takeEvery(GET_USERS, getUsers);
  yield takeEvery(GET_TASKS, getTasks);
}

export default watcherSaga;