import { combineReducers } from "redux";
import { entriesReducer } from "./entries/entriesReducer";
import { userReducer } from "./user/userReducer";

const rootReducer = combineReducers({
  entries: entriesReducer,
  user: userReducer,
});

export default rootReducer;
