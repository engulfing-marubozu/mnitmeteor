import "./App.css";
import RouterCon from "./components/RouterConfig/RouterCon";
import Wrapper from "./components/RouterConfig/Wrapper";
import { useDispatch } from "react-redux";
import { AuthUser } from "./AStatemanagement/Actions/userActions.jsx";
import {useEffect} from "react";



function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log("visited use_effect");
    JSON.parse(window.localStorage.getItem('auth')) &&  dispatch(AuthUser(JSON.parse(window.localStorage.getItem('auth'))));
    
  })


  return (
    <>
      <Wrapper>
        <RouterCon />
      </Wrapper>
    </>
  );
}

export default App;
