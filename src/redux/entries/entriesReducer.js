import {
  FETCH_ENTRIES_FAILURE,
  FETCH_ENTRIES_REQUEST,
  FETCH_ENTRIES_SUCCESS,
} from "./entriesTypes";

const initialState = {
  entries: [],
  loading: false,
  error: false,
};

export const entriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ENTRIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ENTRIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_ENTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        entries: action.payload,
      };
    default:
      return state;
  }
};
