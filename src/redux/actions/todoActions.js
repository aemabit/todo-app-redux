import { returnErrors } from "./errorActions";

import {
  GET_USER_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  LOADING_TODO,
} from "../types/todoTypes";
import axios from "axios";
import { tokenConfig } from "../../utils/tokenConfig";

const url = "https://todo-app-server-aemabit.herokuapp.com/api/todo/";

// LOAD USER TODO
export const loadUserTodos = () => (dispatch, getState) => {
  dispatch({ type: LOADING_TODO });

  axios
    .get(url + "list", tokenConfig(getState))
    .then((res) => dispatch({ type: GET_USER_TODOS, payload: res.data }))
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const addTodo = ({ task }) => (dispatch, getState) => {
  dispatch({ type: LOADING_TODO });

  const body = { task };

  axios
    .post(url + "create", body, tokenConfig(getState))
    .then((res) => dispatch({ type: ADD_TODO, payload: res.data }))
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const deleteTodo = ({ id }) => (dispatch, getState) => {
  dispatch({ type: LOADING_TODO });

  const body = { id };

  axios
    .post(url + "delete", body, tokenConfig(getState))
    .then((res) => dispatch(loadUserTodos()))
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const updateTodo = ({ id, task, complete }) => (dispatch, getState) => {
  dispatch({ type: LOADING_TODO });

  const body = { id, input: { task, complete } };

  axios
    .post(url + "update", body, tokenConfig(getState))
    .then((res) => dispatch({ type: UPDATE_TODO, payload: res.data }))
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};
