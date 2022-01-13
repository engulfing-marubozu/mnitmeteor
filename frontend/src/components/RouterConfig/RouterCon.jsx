import { Routes, Route } from "react-router-dom";
import Home from "../HomePage/Home";
import About from "../About/About";
import ProductSellCard from "../Productsellcard/productSellCard";
function RouterCon() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/ProductSellCard" element={<ProductSellCard/>}/>
      <Route path="*" element={<div>No Page found </div>} />
    </Routes>
  );
}
export default RouterCon;
