import React from "react";
import { Navigate } from "react-router-dom";
function ProtectedRoute({ Component }) {
  const credData = JSON.parse(window.localStorage.getItem("Zuyq!jef@}#e"));
  if (credData?.oamp === true) {
    const userAuthData = { isLogin: credData?.oamp, token: credData?.xezzi };
    return <Component userAuthData={userAuthData} />;
  } else {
    return <Navigate to="/" />;
  }
}

export default ProtectedRoute;
