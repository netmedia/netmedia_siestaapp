import { LOGIN_ATTEMPT, LOGIN_FAILURE, LOGIN_SUCCESS } from "./userTypes";

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
