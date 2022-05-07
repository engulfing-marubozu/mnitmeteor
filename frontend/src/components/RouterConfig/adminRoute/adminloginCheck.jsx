import React from "react";
import { Navigate } from "react-router-dom";
function AdminLoginCheck({ Component }) {
  const credData = JSON.parse(window.localStorage.getItem("Bgp_pejbsv/+/&}s"));
  console.log(credData);
  console.log(credData);
  if (!credData) {
    console.log("adminlogin");
    return <Component />;
  } else {
    return <Navigate to="/adminportel" />;
  }
}
export default AdminLoginCheck;
