import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function NotificationBox() {
  const [notifications, setNotifications] = useState();
  const token = useSelector((state) => state.loginlogoutReducer.token);
 
  useEffect(()=>{
  const fetch_notification = async ()=>{
    const response = await axios.get(
      "http://localhost:5000/send_notification",
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
       setNotifications(response.data);
       console.log(response.data)
  }
      fetch_notification(); 
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

  return (
     <div>notificationBoxdfdkasfj;adkfjklasjfddfdsfdfdfdsfadfdafdfdf</div>
 
  )
}
export default NotificationBox;