import * as actionTypes from "../Actions/actionTypes";
import updateState from "../utility";
const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateState(state, {
        results: state.results.concat({ value: action.counter, id: new Date() })
      });
    case actionTypes.DELETE_RESULT:
      return updateState(state, {
        results: state.results.filter(result => {
          return result.id !== action.id;
        })
      });
    default:
      return state;
  }
};

export default reducer;
