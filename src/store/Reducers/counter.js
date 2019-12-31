import * as actionTypes from "../Actions/actionTypes";
import updateState from "../utility";
const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return updateState(state, {
        counter: state.counter + 1
      });

    case actionTypes.DECREMENT:
      return updateState(state, {
        counter: state.counter - 1
      });

    case actionTypes.ADD:
      return updateState(state, {
        counter: state.counter + action.value
      });

    case actionTypes.SUBTRACT:
      return updateState(state, {
        counter: state.counter - action.value
      });

    default:
      return state;
  }
};

export default reducer;
