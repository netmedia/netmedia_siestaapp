import { LOGIN_ATTEMPT, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from './userTypes';
import { toast } from 'react-toastify';
import { toastOptions } from '../../utils/toastOptions';
import { deleteFromLocal, getFromLocal, saveToLocal } from '../../utils/localStorage';

const initialState = {
  loading: false,
  error: false,
  credentials: getFromLocal('loginData') || {
    loggedIn: false,
  },
  msg: '',
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
      toast.success(action.payload.successMSG, toastOptions);
      saveToLocal('loginData', { ...action.payload.userInfo, loggedIn: true });
      return {
        ...state,
        loading: false,
        error: false,
        credentials: { ...action.payload.userInfo, loggedIn: true },
        msg: action.payload.successMSG,
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
      deleteFromLocal('loginData');
      return {
        ...state,
        loading: false,
        error: false,
        msg: action.payload,
        credentials: { loggedIn: false },
      };

    default:
      return state;
  }
};
