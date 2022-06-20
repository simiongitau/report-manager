import * as types from "./actionTypes";

const initialUserState = {
  loading: false,
  currentUser: null,
  error: null,
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case types.REGISTER_START:
    case types.LOGIN_START:
    case types.LOGOUT_START:
      return {
        ...state,
        loading: true,
      };
    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: true,
        currentUser: action.payload,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case types.REGISTER_FAIL:
    case types.LOGIN_FAIL:
    case types.LOGOUT_FAIL:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    case types.SET_USER:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
