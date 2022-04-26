import { Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
import AdminPanel from "../../AdminPanel/adminpanel";
function AdminRouterCon() {
  //   const localUserData = useSelector((state) => state.loginlogoutReducer);
  //   const localStorageData = JSON.parse(window.localStorage.getItem("auth"));
  //   const isLoggedIn = localStorageData
  //     ? localStorageData.isLogin
  //     : localUserData.isLogin;

  return (
    <Routes>
      <Route path="adminPanel" element={<AdminPanel />} />
      <Route path="*" element={<div>No Page found </div>} />
    </Routes>
  );
}
export default AdminRouterCon;
