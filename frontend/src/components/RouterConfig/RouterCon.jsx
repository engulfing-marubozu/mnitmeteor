import { Routes, Route } from "react-router-dom";
import Home from "../HomePage/Home";
import About from "../About/About";
import ProductSellCard from "../Productsellcard/productSellCard";
import ProductCard from "../HomePage/Product";
// import Model from "../loginForm/Model";
import DiscriptionCard from "../Cards/DiscriptionCard";
import Adminpanel from "../../AdminPanel/adminpanel";
function RouterCon() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path ="/Home" element={<Home/>}/>
      <Route path="/About" element={<About />} />
      {/* <Route path="/signup" element={<Model />} />
      <Route path="/signin" element={<Model />} />
      <Route path="/login" element ={<Model/>}/> */}
      <Route path="home/:Category" element ={<ProductCard/>}/>
      <Route path="/Sellproduct" element={<ProductSellCard />} />
      <Route path="/Product/:productId" element={<DiscriptionCard/>}/>
      <Route path ="/Adminpanel" element ={<Adminpanel/>}/>
      <Route path="*" element={<div>No Page found </div>} />
    </Routes>
  );
}
export default RouterCon;
