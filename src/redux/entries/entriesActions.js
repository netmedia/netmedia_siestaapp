import axios from "axios";

import {
  ADD_NEW_ENTRY_REQUEST,
  ADD_NEW_ENTRY_SUCCESS,
  ADD_NEW_ENTRY_FAILURE,
  FETCH_ENTRIES_FAILURE,
  FETCH_ENTRIES_REQUEST,
  FETCH_ENTRIES_SUCCESS,
} from "./entriesTypes";

export const fetchEntriesReq = () => {
  return {
    type: FETCH_ENTRIES_REQUEST,
  };
};

export const fetchEntriesFailure = (error) => {
  return {
    type: FETCH_ENTRIES_FAILURE,
    payload: error,
  };
};

export const fetchEntriesSucces = (entries) => {
  return {
    type: FETCH_ENTRIES_SUCCESS,
    payload: entries,
  };
};

export const addNewEntryReq = () => {
  return {
    type: ADD_NEW_ENTRY_REQUEST,
  };
};

export const addNewEntrySuccess = (successMSG) => {
  return {
    type: ADD_NEW_ENTRY_SUCCESS,
    payload: successMSG,
  };
};

export const addNewEntryFailure = (errorMSG) => {
  return {
    type: ADD_NEW_ENTRY_FAILURE,
    payload: errorMSG,
  };
};

export const getAllEntries = (endpoint) => {
  return (dispatch) => {
    dispatch(fetchEntriesReq());
    axios
      .get(endpoint)
      .then((result) => {
        if (result.statusText !== "OK") {
          const errorMSG = `There was an error while processing your request`;
          dispatch(fetchEntriesFailure(errorMSG));
        } else {
          const entriesList = result.data;
          dispatch(fetchEntriesSucces(entriesList));
        }
      })
      .catch((error) => {
        dispatch(fetchEntriesFailure(error));
      });
  };
};

export const addSingleEntry = (endpoint, options) => {
  return (dispatch) => {
    dispatch(addNewEntryReq());
    axios
      .post(endpoint, options)
      .then((response) => {
        if (response.statusText === "CREATED") {
          dispatch(addNewEntrySuccess(`New entry added succesfully`));
        }
      })
      .catch((error) => {
        dispatch(addNewEntryFailure(error.message));
      });
  };
};
