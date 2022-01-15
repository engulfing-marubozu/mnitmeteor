import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../HomePage/Home";
import About from "../About/About";
import ProductSellCard from "../Productsellcard/productSellCard";
import ProductCard from "../HomePage/Product";
import DiscriptionCard from "../Cards/DiscriptionCard";
import Adminpanel from "../../AdminPanel/adminpanel";
import {useSelector} from "react-redux";
function RouterCon() {
  const isLoggedIn=useSelector((state)=>state.loginlogoutReducer.isLogin);
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<ProductCard  Category="recommandation"/>} />   
        <Route path="Product/:category" element={<ProductCard />} />
      </Route>
      <Route path="About" element={<About />} />
      <Route path="Sellproduct" element={isLoggedIn?<ProductSellCard />:<Navigate to="/"/> }/>
      <Route
        path="ProductDiscription/:productId"
        element={<DiscriptionCard />}
      />
      <Route path="Adminpanel" element={<Adminpanel />} />
      <Route path="*" element={<div>No Page found </div>} />
    </Routes>
  );
}
export default RouterCon;
