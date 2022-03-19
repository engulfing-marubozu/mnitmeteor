
import React, { useState, useRef } from "react";
import axios from "axios";
import { useEffect } from "react";
import AdminPanelPage from "./sellingPanel";
import { Typography } from "@mui/material";
import { socket } from "../../components/Navbar/navbar";
import LostFoundPanel from "./lostfoundPanel";
import ThreadPanel from "./threadPanel";
function AdminPanel() {
  const mountedRef = useRef(true);
  const [data, setdata] = useState();
  const [LFData, setLFData] = useState();
  const [threadData, setThreadData] = useState();
  const [flag, setflag] = useState(true);
  const [lfFlag, setlfFlag] = useState(true);
  const [tflag, settflag] = useState(true);
  // ===================================================================================================================
  useEffect(() => {
    return () => {mountedRef.current = false};
  }, [])

  // ================================================================================================================
  const ApproveRequest = async (cardData) => {
    const response = await axios.post("http://localhost:5000/admin_response", {
      id: cardData._id,
      response: true,
    });
    if (response.data === "product approved") {
      socket.emit("admin approve event");
      socket.emit("admin decline/approve/interested event", cardData.posted_by);
    }
    if (mountedRef.current) {
      setflag(!flag);
    }
  };
  const DeclineRequest = async (cardData) => {
    const user_id = cardData.posted_by;
    try {
      const response = await axios.post("http://localhost:5000/admin_response", {
        id: cardData._id,
        response: false,
      });
      console.log(response);
      if (response.data === "product Ad request declined") {
        socket.emit("admin decline/approve/interested event", user_id);
      }
      if (mountedRef.current) {
        setflag(!flag);
      }
    }
    catch (err) {
      console.log(err);
    }
  };

  // ==============================================================================================================
  const ApproveRequestLF = async (cardData) => {
    try {
      await axios.post("http://localhost:5000/adminresponse", {
        to_approve: true,
        posted_by: cardData.posted_by,
        _id: cardData._id,
      });
      if (mountedRef.current) {
        setlfFlag(!lfFlag);
      }
    } catch (err) {
      console.log(err);
    }

  };
  const DeclineRequestLF = async (cardData) => {
    console.log("lfdecline");
    try {
      await axios.post("http://localhost:5000/adminresponse", {
        to_approve: false,
        posted_by: cardData.posted_by,
        _id: cardData._id,
      });
      if (mountedRef.current) {
        setlfFlag(!lfFlag);
      }
    }
    catch (err) {
      console.log(err);
    }
  };
  // =================================================================================================
  const ApproveRequestThread = async (cardData) => {
    try {
      // const response = 
      await axios.post("http://localhost:5000/handle_admin_thread", {
        to_approve: true,
        posted_by: cardData.posted_by,
        _id: cardData._id,
      });
      // console.log(response);
      if (mountedRef.current) {
        settflag(!tflag);
      }
    } catch (err) {
      console.log(err);
    }

  };
  const DeclineRequestThread = async (cardData) => {
    console.log("Thread deleted ");
    try {
      // const response = 
      await axios.post("http://localhost:5000/handle_admin_thread", {
        to_approve: false,
        posted_by: cardData.posted_by,
        _id: cardData._id,
      });
      // console.log(response)
      if (mountedRef.current) {
        settflag(!tflag);
      }
    }
    catch (err) {
      console.log(err);
    }
  };
  // ===================================================Fetching Data=====================================
  // lf get code: "http://localhost:5000/sendfalseitems"
  // post code http://localhost:5000/adminresponse
  useEffect(() => {
    const admin_lf_load = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/sendfalseitems"
        );
        setLFData(response.data);
      }
      catch (err) {
        console.log(err);
      }
    };
    admin_lf_load();
  }, [lfFlag])
  // =======================================================================================================
  useEffect(() => {
    const admin_thread_load = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/fetch_false_threads"
        );
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
          setdata(response.data.data);
        }

      } catch (err) {
        console.log(err);
      }
    };
    admin_post_load();
    return () => { isSubscribed = false }
  }, [flag])
  // ==========================================================================================================
  return (
    <>
      <Typography variant="h5" sx={{ px: { xs: 3.5, lg: 14 }, py: { xs: 2, lg: 3 } }} > This is admin panel</Typography>
      {
        data &&
        data.map((product, index) => {
          return (
            <AdminPanelPage
              key={index}
              data={product}
              ApproveRequest={ApproveRequest}
              DeclineRequest={DeclineRequest}
            />
          );
        })
      }
      <h1>Lost and found AP</h1>
      {/* <LostFoundPanel data={LFData}/> */}
      {
        LFData &&
        LFData.map((product, index) => {
          return (
            <LostFoundPanel
              key={index}
              data={product}
              ApproveRequest={ApproveRequestLF}
              DeclineRequest={DeclineRequestLF}
            />
          );
        })
      }
      <h1>Threads AP</h1>
      {
        threadData &&
        threadData.map((product, index) => {
          return (
            <ThreadPanel
              key={index}
              data={product}
              ApproveRequest={ApproveRequestThread}
              DeclineRequest={DeclineRequestThread}
            />
          );
        })
      }
    </>
  );
}

export default AdminPanel;



