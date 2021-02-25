import { CLEAR_ERRORS, GET_ERRORS } from "../types/errorTypes";

// RETURN ERRORS
export const returnErrors = (msg, status = null) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status },
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
