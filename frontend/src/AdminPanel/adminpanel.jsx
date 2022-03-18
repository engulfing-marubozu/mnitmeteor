import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import AdminPanelPage from "./adminPanelPage";
import { Typography } from "@mui/material";
import { socket } from "./../components/Navbar/navbar";

function Adminpanel() {
  const [data, setdata] = useState("");
  const [LFData, setLFData] = useState("");
  
  const [flag, setflag] = useState(true);
  // ===================================================================================================================================================================
  const ApproveRequest = async (cardData) => {
    const id = cardData._id;

    const response = await axios.post("http://localhost:5000/admin_response", {
      id,
      response: true,
    });
    console.log(response);
    socket.emit("admin approve event");
    setflag(!flag);
  };
  const DeclineRequest = async (cardData) => {
    const id = cardData._id
    const user_id = cardData.posted_by;
    try {
      const response = await axios.post("http://localhost:5000/admin_response", {
        id,
        response: false,
      });
      console.log(response);
      if (response.data === "product Ad request declined") {
        console.log("done");
        console.log(user_id);
        socket.emit("admin decline event", user_id);
      }
      setflag(!flag);
    }
    catch (err) {
      console.log(err);
    }
  };
  const ApproveRequestLF = async (cardData) => {
    const id = cardData._id;

    const response = await axios.post("http://localhost:5000/adminresponse", {
      to_approve: true,
      posted_by: cardData.posted_by,
      _id: id,
    });
    console.log(response);
    // socket.emit("admin approve event");
    // setflag(!flag);
  };
  const DeclineRequestLF = async (cardData) => {
    const id = cardData._id
    const user_id = cardData.posted_by;
    try {
      const response = await axios.post("http://localhost:5000/adminresponse", {
        to_approve:false,
        posted_by: cardData.posted_by,
        _id: id,
      });
      console.log(response);
      // if (response.data === "product Ad request declined") {
      //   socket.emit("admin decline event", user_id);
      // }
      // setflag(!flag);
    }
    catch (err) {
      console.log(err);
    }
  };
  // ===================================================Fetching Data=================================================================================================
  //lf get code: "http://localhost:5000/sendfalseitems"
  //post code http://localhost:5000/adminresponse
  useEffect(() => {
    const admin_lf_load = async()=>{
      try {
        const response = await axios.get(
          "http://localhost:5000/sendfalseitems"
        );
        setLFData(response.data.data);
      }
      catch(err){
        console.log(err);
      }
    };
  })
  useEffect(() => {
    let isSubscribed = true;
    const admin_post_load = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/admin_postLoad"
        );
        if (isSubscribed) {
          // console.log(response.data.data);
          setdata(response.data.data);
        }

      } catch (err) {
        console.log(err);
      }
    };

    admin_post_load();
    return () => { isSubscribed = false }
  }, [flag])
  // =====================================================================================================================================================================
  return (
    <>

      <Typography variant="h5" sx={{ px: { xs: 3.5, lg: 14 }, py: { xs: 2, lg: 3 } }} > This is admin panel</Typography>
      {
        data &&
        data.map((product, index) => {
          return (
            <AdminPanelPage
              index={index}
              key={index}
              cardData={product}
              ApproveRequest={ApproveRequest}
              DeclineRequest={DeclineRequest}
            />
          );
        })
      }
      <h1>Lost and found AP</h1>
      {
        LFData &&
        LFData.map((product, index) => {
          return (
            <AdminPanelPage
              index={index}
              key={index}
              cardData={product}
              ApproveRequest={ApproveRequestLF}
              DeclineRequest={DeclineRequestLF}
            />
          );
        })
      }

    </>
  );
}

export default Adminpanel;
