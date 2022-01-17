import { AUTH_USER, LOGOUT_USER, MODEL_POPUP, SELLNOW_CLICKED } from "./types";
// import { USER_SERVER } from "../components/Config.js";

export const AuthUser = (data = {}) => {
  
  return { type: AUTH_USER, payload: data };
};
export const LogoutUser = () => {
  return { type: LOGOUT_USER };
};
export const SellNowclick = (bool) => {
  return { type: SELLNOW_CLICKED,
  payload:bool };
};
 
export const modelPopUp=(bool)=>{
  return {type:MODEL_POPUP,
  payload:bool}
};