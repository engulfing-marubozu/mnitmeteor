import {
  ADD_TO_FAVOURITES,
  ADD_TO_INTERESTED,
  AUTH_USER,
  LOGOUT_USER,
  MODEL_POPUP,
  SELLNOW_CLICKED,
} from "../Actions/types";

const InitialState = {
  isLogin: false,
  sellnowClicked: false,
  userData: { email: undefined },
};

export const loginlogoutReducer = (state = InitialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isLogin: true,
        userData: action.payload.user,
        token: action.payload.token,
      };

    case LOGOUT_USER:
      return {
        ...state,
        userData: { email: undefined },
        token: undefined,
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

const favouritesInitialValue = {};
export const FavouritesReducer = (state = favouritesInitialValue, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favouritesData: action.payload,
      };
    default:
      return state;
  }
};

const interestedInitialValue = { interestedData:"undefined" };
export const InterestedReducer = (state = interestedInitialValue, action) => {
  switch (action.type) {
    case ADD_TO_INTERESTED:
      return {
        ...state,
        interestedData: action.payload,
      };
    default:
      return state;
  }
};
