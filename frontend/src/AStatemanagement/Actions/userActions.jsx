import {
  ADD_TO_FAVOURITES,
  ADD_TO_ORDERS,
  AUTH_USER,
  DELETE_FROM_ORDERS,
  LOGOUT_USER,
  MODEL_POPUP,
  SELLNOW_CLICKED,
} from "./types";
import axios from "axios"
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
  console.log(data);
  return {
    type: ADD_TO_FAVOURITES,
    payload: data,
  };
};
// export const removeFromFavourites = (data) => {
//   console.log(data);
//   return {
//     type: REMOVE_FROM_FAVOURITES,
//     payload: data,
//   };
// };
export const addToOrders = (data) => {
  return {
    type: ADD_TO_ORDERS,  
    payload: data,
  };
};
export const removeFromOrders = (data) => {
  return {
    type: DELETE_FROM_ORDERS,
    payload: data,
  };
};

<<<<<<< HEAD
export const fetchDataForATF = (likedata) => {
  return async (dispatch) => {
    // const response=await
  };
};

// export const fetchDataForRTF = (dislikedata) => {
//   return async (dispatch) => {
//     //  const response=await
//   };
// };
=======
export const fetchDataForATF=(likedata)=>{
  console.log(likedata);
  return async (dispatch)=>{
    try{
      const { productId, userToken, isLiked} = likedata;
       const response = await axios.post("http://localhost:5000/favourites_update", 
       {productId, isLiked},
         {headers : {
           Authorization : `Bearer ${userToken}`
         }},
      )
      dispatch( addToFavourites(response.data));
     }
      catch(err)
      {
        console.log(err);
      }
  }
}

// export const fetchDataForRTF=(dislikedata)=>{
//   return async(dispatch)=>{
//   //  const response=await 
//   }
// }
>>>>>>> 1b62a825d4d4ab34347cc90c3a0e4c3d6830f843
