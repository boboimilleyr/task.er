import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import createSagaMiddleware from '@redux-saga/core';
import watcherSaga from './sagas';
import taskReducer from './taskReducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userReducer,
    task: taskReducer
  },
  middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(watcherSaga);

export default store;