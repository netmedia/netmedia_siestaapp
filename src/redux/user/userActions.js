import { LOGIN_ATTEMPT, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, TOGGLE_CRL_THEME } from "./userTypes";

export const userLoginAttempt = () => {
  return {
    type: LOGIN_ATTEMPT,
  };
};

export const userLoginSuccess = (userInfo, successMSG) => {
  return {
    type: LOGIN_SUCCESS,
    payload: { userInfo, successMSG },
  };
};

export const userLoginFailure = (errorMSG) => {
  return {
    type: LOGIN_FAILURE,
    payload: errorMSG,
  };
};

export const userLogout = (successMSG) => {
  return {
    type: LOGOUT,
    payload: successMSG,
  };
};

export const toggleClrTheme = () => {
  return {
    type: TOGGLE_CRL_THEME,
  };
};
