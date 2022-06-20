import * as types from "./actionTypes";
import axios from "axios";

const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});

const logoutFail = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});

export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

export const registerInitiate = (
  name,
  email,
  password,
  passwordConfirmation
) => {
  return async function (dispatch) {
    dispatch(registerStart());
    await axios
      .post(`https://ducumentmonitoringapp.herokuapp.com/api/v1/register/`, {
        name,
        email,
        password,
        passwordConfirmation,
      })
      .then((res) => {
        if (res.status === 400) {
          dispatch(registerFail(res.data));
        } else if (res.status === 409) {
          dispatch(registerFail(res.data));
        } else if (res.status === 201) {
          dispatch(registerSuccess(res.data.user));
        }
      })
      .catch((error) => dispatch(registerFail(error.message)));
  };
};

export const loginInitiate = (email, password) => {
  return async function (dispatch) {};
};

export const logoutInitiate = () => {
  return async function (dispatch) {};
};
