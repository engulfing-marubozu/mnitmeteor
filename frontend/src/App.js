import "./App.css";
import Navbar from "./components/Navbar/navbar.js";
import Paper from "@mui/material/Paper";
import DiscriptionCard from "./components/Cards/DiscriptionCard";
import RouterCon from "./components/RouterConfig/RouterCon";
import UploadProductPage from "./components/Productsellcard/sellnow";

function App() {
  return (
    <>
      <Paper sx={{ bgcolor: "#ede7f6" }}>
        <Navbar />
        {/* <DiscriptionCard></DiscriptionCard> */}

        {/* <UploadProductPage/> */}
        <RouterCon />
      </Paper>
    </>
  );
}

export default App;
