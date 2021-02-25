import { CLEAR_ERRORS, GET_ERRORS } from "../types/errorTypes";

const initialState = {
  msg: {},
  status: null,
};

function errorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
      };
    case CLEAR_ERRORS:
      return {
        msg: {},
        status: null,
      };
    default:
      return state;
  }
}

export default errorReducer;
