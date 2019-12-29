import * as actionTypes from "../Actions/actions";
const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ value: action.counter, id: new Date() })
      };
    case actionTypes.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter(result => {
          return result.id !== action.id;
        })
      };
  }

  return state;
};

export default reducer;
