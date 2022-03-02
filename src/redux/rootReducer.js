import { combineReducers } from "redux";
import { entriesReducer } from "./entries/entriesReducer";

const rootReducer = combineReducers({
  entries: entriesReducer,
});

export default rootReducer;
