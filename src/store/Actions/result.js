import * as actionTypes from "../Actions/actionTypes";

export const saveResult = counter => {
  return {
    type: actionTypes.STORE_RESULT,
    counter
  };
};

export const storeResult = counter => {
  return dispatch => {
    return setTimeout(() => {
      dispatch(saveResult(counter));
    }, 2000);
  };
};

export const deleteResult = id => {
  return {
    type: actionTypes.DELETE_RESULT,
    id
  };
};
