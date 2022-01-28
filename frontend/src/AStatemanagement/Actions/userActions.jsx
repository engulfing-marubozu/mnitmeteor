import {
  ADD_TO_FAVOURITES,
  ADD_TO_INTERESTED,
  AUTH_USER,
  LOGOUT_USER,
  MODEL_POPUP,
  SELLNOW_CLICKED,
  DELETE_PUBLISHED_ADS,
} from "./types";
import axios from "axios";
// import { USER_SERVER } from "../components/Config.js";

export const AuthUser = (data = {}) => {
  return { type: AUTH_USER, payload: data };
};
export const LogoutUser = () => {
  return { type: LOGOUT_USER };
};
export const SellNowclick = (bool) => {
  return { type: SELLNOW_CLICKED, payload: bool };
};

export const modelPopUp = (bool) => {
  return { type: MODEL_POPUP, payload: bool };
};
export const addToFavourites = (data) => {
  // console.log(data);
  return {
    type: ADD_TO_FAVOURITES,
    payload: data,
  };
};
export const addToInterested = (data) => {
  return {
    type: ADD_TO_INTERESTED,
    payload: data,
  };
};

export const deletePublishedProduct =(data)=>{
  return {
    type:DELETE_PUBLISHED_ADS,
    payload:data,
  }
}



export const fetchDataForATF = (likedata) => {
  // console.log("deepak");
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


  export const fetchDataForInterestedProduct=(interestedData)=>{
    let response ;
    return async(dispatch)=>{
      try{
        const {productId,userToken,isInterested}=interestedData;
        
        if(isInterested)
        { response = await axios.post(
          "http://localhost:5000/interested_update",
          { productId, isInterested },
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        );
        }
         else{
          response = await axios.post(
            "http://localhost:5000/un_interested_update",
            { productId, isInterested },
            {
              headers: {
                Authorization: `Bearer ${userToken}`,
              },
            }
          );
         }
      console.log(response.data);
       {}
       dispatch(addToInterested(response.data));
      }catch(err){
        console.log(err);
        alert("too many attempts, please try again later");
      }
    }
  }


  export const fetchDataForDeletingPublishedAds =(deletingData)=>{
    console.log(deletingData);
    const {token , productId} = deletingData;
  return async (dispatch)=>{
    try {
      const response = await axios.post ("http://localhost:5000/delete_published_Ads", {productId}, {
        headers : {
          Authorization : `Bearer ${token}`
        }
      })
      dispatch(deletePublishedProduct(response.data));
    }catch(err){
      console.log(err);
    }
  }
  }