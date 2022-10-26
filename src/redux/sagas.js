import { takeEvery, put } from 'redux-saga/effects';
import {
  GET_USERS,
  GET_USERS_DONE
} from './constants';

function* getUsers() {
  let users = yield fetch(`http://localhost:3030/users`);
  users = yield users.json();
  yield put({type: GET_USERS_DONE, payload: users});
}

function* watcherSaga() {
  yield takeEvery(GET_USERS, getUsers);
}

export default watcherSaga;