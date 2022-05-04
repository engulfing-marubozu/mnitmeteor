import React from "react";
import { Navigate } from "react-router-dom";
function AdminProtected({ Component }) {
  const credData = JSON.parse(window.localStorage.getItem("pliquing"));
  console.log(credData);
  console.log(credData);
  if (credData?.dabirc === "5u7nJmsU.J5p3rA`c*9-") {
    console.log("passed ");
    return <Component />;
  } else {
    return <Navigate to="adminlogin" />;
  }
}

export default AdminProtected;
