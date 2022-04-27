import {
  ADD_TO_FAVOURITES,
  ADD_TO_INTERESTED,
  AUTH_USER,
  DELETE_PUBLISHED_ADS,
  LOGOUT_USER,
  MODEL_POPUP,
  PHONE_NUMBER_AUTH,
  SELLNOW_CLICKED,
  DELETE_LF_ITEMS,
  LIKE_THREAD,
  ADMIN_PANEL_MODE,
  FORUM_POPUP,
  LNF_POPUP,
  SELL_POPUP,
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
// =======================================================================================================
const modelPopInitialValue = {
  popUp: false,
  sellPopUp: false,
  forumPopUp: false,
  lnfPopUp: false,
};
export const ModelPopUpReducer = (state = modelPopInitialValue, action) => {
  switch (action.type) {
    case MODEL_POPUP:
      return { ...state, popUp: action.payload };
    case SELL_POPUP:
      return { ...state, sellPopUp: action.payload };
    case FORUM_POPUP:
      return { ...state, forumPopUp: action.payload };
    case LNF_POPUP:
      return { ...state, lnfPopUp: action.payload };
    default:
      return state;
  }
};
// =======================================================================================================
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
// ======================================================================================================
const interestedInitialValue = {
  interestedData: "",
  attempts_left: 3,
  status: true,
  ttl_seconds: 100,
};
export const InterestedReducer = (state = interestedInitialValue, action) => {
  switch (action.type) {
    case ADD_TO_INTERESTED:
      return {
        ...state,
        interestedData: action.payload.updatedUser,
        ...(typeof action.payload.attempts_left !== "undefined" && {
          attempts_left: action.payload.attempts_left,
        }),
        ...(typeof action.payload.status !== "undefined" && {
          status: action.payload.status,
        }),
        ...(typeof action.payload.ttl_seconds !== "undefined" && {
          ttl_seconds: action.payload.ttl_seconds,
        }),
        // status: true,
        // ttl_seconds: 31
      };
    default:
      return state;
  }
};
// ======================================================================================
const publishedAdInitialData = {};
export const DeletePublishedAdsReducer = (
  state = publishedAdInitialData,
  action
) => {
  switch (action.type) {
    case DELETE_PUBLISHED_ADS:
      return {
        ...state,
        publishedAdsData: action.payload,
      };
    default:
      return state;
  }
};
// ============================================================================================
const lfInitialState = {};
export const lfDeleteReducer = (state = lfInitialState, action) => {
  switch (action.type) {
    case DELETE_LF_ITEMS:
      return {
        ...state,
        lfItemPosted: action.payload,
      };
    default: {
      return state;
    }
  }
};
// ============================================================================================
const likeThreadInitialState = {};
export const likeThread = (state = likeThreadInitialState, action) => {
  switch (action.type) {
    case LIKE_THREAD:
      return {
        ...state,
      };
    default: {
      return state;
    }
  }
};

// ===============================================================================================
const phoneAuth = {};
export const PhoneAuthReducer = (state = phoneAuth, action) => {
  switch (action.type) {
    case PHONE_NUMBER_AUTH:
      return {
        ...state,

        phoneAuthentication: action.payload,
      };
    default:
      return state;
  }
};
// =================================================================================================
const intialState = { mode: false };
export const AdminPanelReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADMIN_PANEL_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};
