import { LOGIN_ATTEMPT, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from "./userTypes";
import { toast } from "react-toastify";

const savedUserData =
  localStorage.getItem("loginData") && JSON.parse(localStorage.getItem("loginData"));

const initialState = {
  loading: false,
  error: false,
  userInfo: savedUserData || null,
  msg: "",
  colorScheme: "light",
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
      toast(action.payload.successMSG);
      return {
        ...state,
        loading: false,
        error: false,
        userInfo: action.payload.userInfo,
        msg: action.payload.successMSG,
      };
    case LOGIN_FAILURE:
      toast.error(action.payload);
      return {
        ...state,
        loading: false,
        error: true,
        msg: action.payload,
      };

    case LOGOUT:
      toast.success(action.payload);
      return {
        ...state,
        loading: false,
        error: false,
        msg: action.payload,
      };

    default:
      return state;
  }
};
