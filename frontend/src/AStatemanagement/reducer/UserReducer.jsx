import { AUTH_USER, LOGOUT_USER } from "../Actions/types";

const InitialState = {
  login: false,
  logout: true,
};

export const loginlogoutReducer = (state = InitialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        login: true,
        logout: false,
        userData: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        login: false,
        logout: true,
      };
    default:
      return state;
  }
};
