import axios from "axios";

import {
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
          console.log(entriesList);
          dispatch(fetchEntriesSucces(entriesList));
        }
      })
      .catch((error) => {
        dispatch(fetchEntriesFailure(error));
      });
  };
};
