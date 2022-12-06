// saga used as a miideleware for managing api calls

import React from 'react';
import {
  LOGIN,
  USER_LOGIN,
  USER_SIGNUP,
  SIGNUP,
  LOADING,
  NOTIFY,
} from '../action';
import {call, put, takeLatest} from 'redux-saga/effects';
import {API} from '../api';
import showMessage from '../../components/showMessage';

function* login(action) {
  console.log('Login action');
  try {
    console.log('Login action tryyy');
    yield put({type: LOADING, payload: true});
    const data = yield call(API.getLogin, action.payload);
    yield put({type: USER_LOGIN, payload: data.data});
    yield put({type: LOADING, payload: false});
  } catch (e) {
    console.log('Login action cacheee');
    yield put({type: LOADING, payload: false});
    yield put({type: NOTIFY, payload: e});
    yield put({type: USER_LOGIN, payload: e.response.data});
  }
}

function* registeration(action) {
  try {
    yield put({type: LOADING, payload: true});
    const data = yield call(API.getRegister, action.payload);
    yield put({type: REGISTER_DATA, payload: data.data});
    yield put({type: LOADING, payload: false});
  } catch (e) {
    yield put({type: LOADING, payload: false});
    yield put({type: NOTIFY, payload: e});
    // yield put({type: USER_LOGIN, payload: {}});
    yield put({type: REGISTER_DATA, payload: e.response.data});
    //yield put({type: USER_LOGIN, payload: {}});
    // yield put({type: REGISTER_DATA, payload: e.response.data});
  }
}

function* signup(action) {
  try {
    yield put({type: LOADING, payload: true});
    const data = yield call(API.getSignup, action.payload);
    yield put({type: USER_SIGNUP, payload: data.data});
    yield put({type: LOADING, payload: false});
  } catch (e) {
    yield put({type: LOADING, payload: false});
    yield put({type: NOTIFY, payload: e});
  }
}

export function* rootSaga() {
  yield takeLatest(LOGIN, login);
  // yield takeLatest(REGISTER, registeration);
  // yield takeLatest(SIGNUP, signup);
}
