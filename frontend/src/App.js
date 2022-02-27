import "./App.css";
import RouterCon from "./components/RouterConfig/RouterCon";
import Wrapper from "./components/RouterConfig/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { AuthUser } from "./AStatemanagement/Actions/userActions.jsx";
import {useEffect} from "react";
import {AccountContext} from ".//components/-context/accountContext"

function App() {
  const userData = useSelector((state) => state.loginlogoutReducer.userData);
  const  contextValue={userData};
  console.log("first");
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log("visited use_effect");
    JSON.parse(window.localStorage.getItem('auth')) &&  dispatch(AuthUser(JSON.parse(window.localStorage.getItem('auth'))));
    
  })


  return (
    <>
       {/* <AccountContext.Provider value={contextValue}> */}
      <Wrapper>
        <RouterCon />
      </Wrapper>
      {/* </AccountContext.Provider> */}
    </>
  );
}

export default App;
