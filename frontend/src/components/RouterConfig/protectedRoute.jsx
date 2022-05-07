import React from "react";
import { Navigate } from "react-router-dom";
function ProtectedRoute({ Component }) {
  const credData = JSON.parse(window.localStorage.getItem("Zuyq!jef@}#e"));
  console.log(credData);
  console.log(credData);
  if (credData?.oamp === true) {
    console.log("protectedRoute");
    const userAuthData = { isLogin: credData?.oamp, token: credData?.xezzi };
    return <Component userAuthData={userAuthData} />;
  } else {
    return <Navigate to="/" />;
  }
}

export default ProtectedRoute;
