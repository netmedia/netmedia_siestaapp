import { LOGIN_ATTEMPT, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, TOGGLE_CRL_THEME } from "./userTypes";
import { toast } from "react-toastify";
import { toastOptions } from "../../utils/toastOptions";

const savedUserData =
  localStorage.getItem("loginData") && JSON.parse(localStorage.getItem("loginData"));

const initialState = {
  loading: false,
  error: false,
  userInfo: savedUserData || null,
  msg: "",
  darkMode: false,
  loggedIn: savedUserData.googleId || false,
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
      toast(action.payload.successMSG, toastOptions);
      return {
        ...state,
        loading: false,
        error: false,
        userInfo: action.payload.userInfo,
        msg: action.payload.successMSG,
        loggedIn: true,
      };
    case LOGIN_FAILURE:
      toast.error(action.payload, toastOptions);
      return {
        ...state,
        loading: false,
        error: true,
        msg: action.payload,
      };

    case LOGOUT:
      toast.success(action.payload, toastOptions);
      return {
        ...state,
        loading: false,
        error: false,
        msg: action.payload,
        loggedIn: false,
      };

    case TOGGLE_CRL_THEME:
      return {
        ...state,
        darkMode: !state.darkMode,
      };

    default:
      return state;
  }
};
