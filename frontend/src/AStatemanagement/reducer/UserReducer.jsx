import {
  ADD_TO_FAVOURITES,
  AUTH_USER,
  LOGOUT_USER,
  MODEL_POPUP,
  SELLNOW_CLICKED,
} from "../Actions/types";

const InitialState = {
  isLogin: false,
  sellnowClicked: false,
  userData: {email: undefined}
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
<<<<<<< HEAD
        userData: null,
        token: null,
=======
        userData: {email: undefined},
        token : null,
>>>>>>> 1b62a825d4d4ab34347cc90c3a0e4c3d6830f843
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
