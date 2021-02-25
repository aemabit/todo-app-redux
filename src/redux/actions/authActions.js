import axios from "axios";

import { returnErrors } from "./errorActions";
import {
  USER_LOADING,
  USER_LOADED,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  AUTH_ERROR,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  REGISTER_FAILURE,
} from "../types/authTypes";
import { tokenConfig } from "../../utils/tokenConfig";

const url = "http://localhost:4000/api/auth/";

// CHECK TOKEN AND LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // USER LOADING
  dispatch({ type: USER_LOADING });

  axios
    .get(url + "current", tokenConfig(getState))
    .then((res) => dispatch({ type: USER_LOADED, payload: res.data }))
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: AUTH_ERROR });
    });
};

// REGISTER USER
export const register = ({ username, email, password }) => (dispatch) => {
  //   HEADERS
  const config = {
    headers: {
      "Content-Type": "application/json",
      withCredentials: true,
    },
  };
  const body = { username, email, password };
  axios
    .post(url + "signup", body, config)
    .then((res) => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: REGISTER_FAILURE });
    });
};

// LOGIN
export const login = ({ email, password }) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      withCredentials: true,
    },
  };
  const body = { email, password };
  axios
    .post(url + "signin", body, config)
    .then((res) => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: LOGIN_FAILURE });
    });
};

// LOGOUT
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};


