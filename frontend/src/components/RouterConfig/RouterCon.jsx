import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../HomePage/Home";
import About from "../About/About";
import Discussions from "../Discussions/discussion";
import LostFound from "../Lost&Found/lostFound";
import AproductSellCard from "../SellnowNew/AproductSellCard";
import ProductCard from "../HomePage/Product";
import DiscriptionCard from "../Cards/DiscriptionCard";
import Profile from "../Profile/Profile";
import Adminpanel from "../../AdminPanel/adminpanel";
import { useSelector } from "react-redux";
import Favourites from "../Favourites/Favourites";
function RouterCon() {
  const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogin);
  console.log(isLoggedIn);
  return (
    <Routes>
      {/* <Route path="/home" element ={<Home/>}/> */}
      <Route path="/" element={<Home />}>
        <Route index element={<ProductCard Category="recommendation" />} />
        <Route path="Product/:category" element={<ProductCard />} />
      </Route>
      <Route path="About" element={<About />} />
      <Route path="Discussions" element={<Discussions />} />
      <Route path="LostFound" element={<LostFound />} />
      <Route
        path="Sellproduct"
        element={isLoggedIn ? <AproductSellCard /> : <Navigate to="/" />}
      />
      <Route
        path="ProductDiscription/:productId"
        element={<DiscriptionCard />}
      />
      <Route
        path="Profile"
        element={isLoggedIn ? <Profile /> : <Navigate to="/" />}
      />
      <Route
        path="Favourites"
        element={isLoggedIn ? <Favourites /> : <Navigate to="/" />}
      />
      <Route path="Adminpanel" element={<Adminpanel />} />
      <Route path="*" element={<div>No Page found </div>} />
    </Routes>
  );
}
export default RouterCon;
