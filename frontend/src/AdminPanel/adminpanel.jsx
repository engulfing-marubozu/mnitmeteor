import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import AdminPanelPage from "./sellingPanel";
import { Typography } from "@mui/material";
import { socket } from "./../components/Navbar/navbar";
import LostFoundPanel from "./lostfoundPanel";

function Adminpanel() {
  const [data, setdata] = useState();
  const [LFData, setLFData] = useState();
  const [ThreadData,setThreadData] = useState();
  
  const [flag, setflag] = useState(true);
  const [lfFlag, setlfFlag] = useState(true);
  const [tflag,settflag] = useState(true);
  // ================================================================================================================
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

  // ==============================================================================================================
  const ApproveRequestLF = async (cardData) => {
    console.log("alfarrpv")
    const id = cardData._id;
    try {
      const response = await axios.post("http://localhost:5000/adminresponse", {
        to_approve: true,
        posted_by: cardData.posted_by,
        _id: id,
      });

      console.log(response);
      console.log("ajfd;la");
      setlfFlag(!lfFlag);
    } catch (err) {
      console.log(err);
    }

  };
  const DeclineRequestLF = async (cardData) => {
    console.log("lfdecline");
    try {
      const response = await axios.post("http://localhost:5000/adminresponse", {
        to_approve: false,
        posted_by: cardData.posted_by,
        _id: cardData._id,
      });
      console.log("dkljadf;");
      console.log(response);
      setlfFlag(!lfFlag);
    }
    catch (err) {
      console.log(err);
    }
  };
  const ApproveRequestThread = async (cardData) => {
    // console.log("alfarrpv")
    const id = cardData._id;
    try {
      const response = await axios.post("http://localhost:5000/handle_admin_thread", {
        to_approve: true,
        posted_by: cardData.posted_by,
        _id: id,
      });

      console.log(response);
      console.log("ajfd;la");
      settflag(!tflag);
    } catch (err) {
      console.log(err);
    }

  };
  const DeclineRequestThread = async (cardData) => {
    console.log("Thread deleted ");
    try {
      const response = await axios.post("http://localhost:5000/handle_admin_thread", {
        to_approve: false,
        posted_by: cardData.posted_by,
        _id: cardData._id,
      });
      console.log("dkljadf;");
      console.log(response);
      settflag(!tflag);
    }
    catch (err) {
      console.log(err);
    }
  };
  // ===================================================Fetching Data=================================
  //lf get code: "http://localhost:5000/sendfalseitems"
  //post code http://localhost:5000/adminresponse
  useEffect(() => {
    const admin_lf_load = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/sendfalseitems"
        );
        console.log("deepak")
        console.log(response.data);
        setLFData(response.data);
      }
      catch (err) {
        console.log(err);
      }
    };
    admin_lf_load();
  }, [lfFlag])
  useEffect(() => {
    const admin_thread_load = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/fetch_false_threads"
        );
        // console.log("deepak")
        // console.log(response.data);
        setThreadData(response.data);
      }
      catch (err) {
        console.log(err);
      }
    };
    admin_thread_load();
  }, [tflag])



  // =======================================================================================================
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
  // ==============================================================================================================
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
            <LostFoundPanel
              index={index}
              key={index}
              cardData={product}
              ApproveRequest={ApproveRequestLF}
              DeclineRequest={DeclineRequestLF}
            />
          );
        })
      }
      <h1>Threads AP</h1>
      {
        ThreadData &&
        ThreadData.map((product, index) => {
          return (
            {/* <LostFoundPanel
              index={index}
              key={index}
              cardData={product}
              ApproveRequest={ApproveRequestThread}
              DeclineRequest={DeclineRequestThread}
            /> */}
          );
        })
      }
    </>
  );
}

export default Adminpanel;
