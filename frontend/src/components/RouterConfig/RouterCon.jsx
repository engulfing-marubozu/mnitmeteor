import { Routes, Route } from "react-router-dom";
import Home from "../HomePage/Home";
import About from "../About/About";
function RouterCon() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="*" element={<div>No Page found </div>} />
    </Routes>
  );
}
export default RouterCon;
