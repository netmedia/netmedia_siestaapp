import {
  ADD_NEW_ENTRY_FAILURE,
  ADD_NEW_ENTRY_REQUEST,
  ADD_NEW_ENTRY_SUCCESS,
  DELETE_SINGLE_ENTRY_FAILURE,
  DELETE_SINGLE_ENTRY_REQUEST,
  DELETE_SINGLE_ENTRY_SUCCESS,
  FETCH_ENTRIES_FAILURE,
  FETCH_ENTRIES_REQUEST,
  FETCH_ENTRIES_SUCCESS,
} from "./entriesTypes";

const initialState = {
  entries: [],
  loading: false,
  error: false,
  msg: "",
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

    case ADD_NEW_ENTRY_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case ADD_NEW_ENTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        msg: action.payload,
      };

    case ADD_NEW_ENTRY_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        msg: action.payload,
      };

    case DELETE_SINGLE_ENTRY_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case DELETE_SINGLE_ENTRY_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case DELETE_SINGLE_ENTRY_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
        msg: action.payload,
      };
    }
    default:
      return state;
  }
};
