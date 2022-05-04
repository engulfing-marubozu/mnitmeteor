import React from 'react'
import { Navigate } from 'react-router-dom';
function AdminProtected(Component) {
 const credData=JSON.parse(window.localStorage.getItem("tgbyhn"));
 console.log(credData);
  if(credData.qazwsx === '5u7nJmsU.J5p3rA`c*9-'){
     return <Component/>
  }else{
      return <Navigate to="/"/>
  }
}

export default AdminProtected;