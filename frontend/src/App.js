import "./App.css";
import Navbar from "./components/Navbar/navbar.js";
import Paper from "@mui/material/Paper";
import RouterCon from "./components/RouterConfig/RouterCon";


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
