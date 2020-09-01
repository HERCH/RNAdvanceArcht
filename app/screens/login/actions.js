/*
 * Action creators are functions that create and return actions .
 */
import * as types from '../../system/types';

export function requestLogin(username, password) {
  return {
    type: types.LOGIN_REQUEST,
    username,
    password,
  };
}

export function loginFailed() {
  return {
    type: types.LOGIN_FAILED,
  };
}

export function onLoginResponse(response) {
  return {
    type: types.LOGIN_RESPONSE,
    token: response.token,
    response,
  };
}

export function logOut() {
  return {
    type: types.LOG_OUT,
  };
}
