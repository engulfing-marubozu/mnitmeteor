import {
  ADD_TO_FAVOURITES,
  ADD_TO_INTERESTED,
  AUTH_USER,
  LOGOUT_USER,
  MODEL_POPUP,
  SELLNOW_CLICKED,
  DELETE_PUBLISHED_ADS,
  PHONE_NUMBER_AUTH,
  ADMIN_PANEL_MODE,
  LNF_POPUP,
  FORUM_POPUP,
  SELL_POPUP,
} from "./types";
import axios from "axios";
// import { USER_SERVER } from "../components/Config.js";
const { io } = require("socket.io-client");
const socket = io("http://localhost:5000", { reconnection: true });
export const AuthUser = (data = {}) => {
  return { type: AUTH_USER, payload: data };
};
// ===============================================================
export const LogoutUser = () => {
  return { type: LOGOUT_USER };
};
// ===============================================================
export const SellNowclick = (bool) => {
  return { type: SELLNOW_CLICKED, payload: bool };
};
// ==================================================================
export const modelPopUp = (bool) => {
  return { type: MODEL_POPUP, payload: bool };
};
export const lnfPopUp = (bool) => {
  return { type: LNF_POPUP, payload: bool };
};
export const forumPopUp = (bool) => {
  return { type: FORUM_POPUP, payload: bool };
};
export const sellPopUp = (bool) => {
  return { type: SELL_POPUP, payload: bool };
};
// ==================================================================

export const addToFavourites = (data) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: data,
  };
};
// ==================================================================

export const addToInterested = (data) => {
  return {
    type: ADD_TO_INTERESTED,
    payload: data,
  };
};

// ==================================================================
export const AdminPanelMode = (data) => {
  // console.log(data);
  return {
    type: ADMIN_PANEL_MODE,
    payload: data,
  };
};

// ==================================================================

export const deletePublishedProduct = (data) => {
  return {
    type: DELETE_PUBLISHED_ADS,
    payload: data,
  };
};
export const phoneAuth = (data) => {
  return {
    type: PHONE_NUMBER_AUTH,
    payload: data,
  };
};
// ==================================================================

export const fetchDataForATF = (likedata) => {
  return async (dispatch) => {
    try {
      const { productId, userToken, isLiked } = likedata;
      const response = await axios.post(
        "http://localhost:5000/favourites_update",
        { productId, isLiked },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      dispatch(addToFavourites(response.data));
    } catch (err) {
      console.log(err);
    }
  };
};
// ==================================================================

export const fetchDataForInterestedProduct = (interestedData) => {
  let response;
  return async (dispatch) => {
    try {
      const { productId, userToken, isInterested } = interestedData;
      if (isInterested) {
        response = await axios.post(
          "http://localhost:5000/interested_update",
          { productId, isInterested },
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );

        if (response.data.status === "success") {
          socket.emit(
            "admin decline/approve/interested event",
            response.data.seller_id
          );
          socket.emit(
            "admin decline/approve/interested event",
            response.data.buyer_id
          );
        } else {
          dispatch(addToInterested(response.data.updatedUser));
        }
      } else {
        response = await axios.post(
          "http://localhost:5000/un_interested_update",
          { productId, isInterested },
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );

        //   if (response.data.status) {
        //     alert(
        //       `${response.data.attempts_left} attempts left for another ${response.data.ttl_seconds} seconds`
        //     );
        // dispatch(addToFavourites(response.data.updatedUser));
        //   } else {
        //
        dispatch(addToInterested(response.data));
      }
    } catch (err) {
      console.log(err);
    }
  };
};
// ==================================================================

export const fetchDataForDeletingPublishedAds = (deletingData) => {
  const { token, productId } = deletingData;
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/delete_published_Ads",
        { productId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(deletePublishedProduct(response.data));
    } catch (err) {
      console.log(err);
    }
  };
};
// ==================================================================

export const fetchDataForPhoneNoAuth = (phoneData) => {
  const { token, phoneNo} = phoneData;
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/mobile_no_update",
        { phoneNo },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = {
        isLogin: true,
        token: token,
        user: response.data.user,
      };
      window.localStorage.setItem("auth", JSON.stringify(data));
      dispatch(AuthUser(data));
    } catch (err) {
      console.log(err);
    }
  };
};

// =====================================================================
export const actionForLikeThread = (likeData) => {
  return async (dispatch) => {
    try {
      await axios.post(
        "http://localhost:5000/like_and_dislike_threads",
        {
          status: likeData.status,
          comment_id: likeData.commentId,
          thread_id: likeData.cardId,
          reply_id: likeData.replyId,
        },
        {
          headers: {
            Authorization: `Bearer ${likeData.token}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
};
