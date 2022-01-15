import {
  AUTH_USER,
  LOGOUT_USER,
  MODEL_POPUP,
  SELLNOW_CLICKED,
} from "../Actions/types";

const InitialState = {
  isLogin: false,
  sellnowClicked: false,
};

export const loginlogoutReducer = (state = InitialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isLogin: true,
        userData: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        userData: {},
        isLogin: false,
        sellnowClicked: false,
      };
    case SELLNOW_CLICKED:
      return { ...state, sellnowClicked: action.payload };
    default:
      return state;
  }
};

const modelPopInitialValue = {
  popUp: false,
};
export const ModelPopUpReducer = (state = modelPopInitialValue, action) => {
  switch (action.type) {
    case MODEL_POPUP:
      return { ...state, popUp: action.payload };
    default:
      return state;
  }
};
