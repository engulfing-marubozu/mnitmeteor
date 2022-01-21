import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../HomePage/Home";
import About from "../About/About";
import ProductSellCard from "../Productsellcard/productSellCard";
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
      <Route path="/" element={<Home />}>
        <Route index element={<ProductCard Category="recommendation" />} />
        <Route path="Product/:category" element={<ProductCard />} />
      </Route>
      <Route path="About" element={<About />} />
      <Route
        path="Sellproduct"
        element={isLoggedIn ? <ProductSellCard /> : <Navigate to="/" />}
      />
      <Route
        path="ProductDiscription/:productId"
        element={<DiscriptionCard />}
      />
      <Route
        path="Profile"
        element={ <Profile /> }
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
