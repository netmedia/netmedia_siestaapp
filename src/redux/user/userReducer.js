import { LOGIN_ATTEMPT, LOGIN_FAILURE, LOGIN_SUCCESS } from "./userTypes";

const savedUserData =
  localStorage.getItem("loginData") && JSON.parse(localStorage.getItem("loginData"));

const initialState = {
  loading: false,
  error: false,
  userInfo: savedUserData || undefined,
  msg: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        userInfo: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        msg: action.payload,
      };
    default:
      return state;
  }
};
