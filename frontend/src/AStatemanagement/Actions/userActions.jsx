import {
  ADD_TO_FAVOURITES,
  ADD_TO_INTERESTED,
  AUTH_USER,
  LOGOUT_USER,
  MODEL_POPUP,
  SELLNOW_CLICKED,
  DELETE_PUBLISHED_ADS,
  PHONE_NUMBER_AUTH,
  LNF_POPUP,
  FORUM_POPUP,
  SELL_POPUP,
} from "./types";
import axios from "axios";
const { io } = require("socket.io-client");
const socket = io(process.env.REACT_APP_API, { reconnection: true });
export const AuthUser = (data = {}) => {
  return { type: AUTH_USER, payload: data };
};
// ===============================================================
export const LogoutUser = () => {
  window.localStorage.removeItem("Zuyq!jef@}#e");
  window.localStorage.removeItem("mm_user_data");
  window.localStorage.removeItem("Bgp_pejbsv/+/&}s");
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
        `${process.env.REACT_APP_API}/favourites_update`,
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
      if (err?.response?.status === 403) {
        dispatch(LogoutUser());
      }
    }
  };
};
// ==================================================================

export const fetchInterestedActions = (interestedData) => {
  return async (dispatch) => {
    try {
      const { productId, userToken, isInterested } = interestedData;
      if (isInterested) {
        const response = await axios.post(
          `${process.env.REACT_APP_API}/interested_update`,
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
        }
        dispatch(addToInterested(response.data.updatedUser));
      } else {
        const response = await axios.post(
          `${process.env.REACT_APP_API}/un_interested_update`,
          { productId, isInterested },
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
        dispatch(addToInterested(response.data.interested_buyers));
      }
    } catch (err) {
      console.log(err);
      if (err?.response?.status === 403) {
        dispatch(LogoutUser());
      }
    }
  };
};
// ==================================================================

export const fetchDataForDeletingPublishedAds = (deletingData) => {
  const { token, productId } = deletingData;
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/delete_published_Ads`,
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
      if (err?.response?.status === 403) {
        dispatch(LogoutUser());
      }
    }
  };
};
// ==================================================================

export const fetchDataForPhoneNoAuth = (phoneData) => {
  const { token, phoneNo, flag, notify } = phoneData;
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/update_mobile_number`,
        { phoneNo: phoneNo },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (flag === "update") {
        notify("Successfully Updated");
      }
      const userAuthData = { oamp: true, xezzi: response.data?.token };
      const userData = {
        profilePic: response.data?.profile_pic,
        email: response.data?.email,
        phoneNo: response.data?.phone_No,
        userId: response.data?.user,
      };
      dispatch(
        AuthUser({
          isLogin: true,
          token: userAuthData.xezzi,
          userData: userData,
        })
      );
      window.localStorage.setItem("Zuyq!jef@}#e", JSON.stringify(userAuthData));
      window.localStorage.setItem("mm_user_data", JSON.stringify(userData));
    } catch (err) {
      console.log(err);
      if (err?.response?.status === 403) {
        dispatch(LogoutUser());
      }
      //send error on not updated
    }
  };
};

// =====================================================================
export const actionForLikeThread = (likeData) => {
  return async (dispatch) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_API}/like_and_dislike_threads`,
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
      if (err?.response?.status === 403) {
        dispatch(LogoutUser());
      }
    }
  };
};
