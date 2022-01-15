import React, { useState } from "react";
import { CardComponent } from "./card_component";
import axios from "axios";
import { useEffect } from "react";

function Adminpanel() {
  const [data, setdata] = useState("");
  const [flag, setflag] = useState(false);

  const ApproveRequest = async (id) => {
    const response = await axios.post("http://localhost:5000/admin_response", {
      id,
      response: true,
    });
    console.log(response);
    setflag(!flag);
  };
  const DeclineRequest = async (id) => {
    const response = await axios.post("http://localhost:5000/admin_response", {
      id,
      response: false,
    });
    console.log(response);
    setflag(!flag);
  };
  useEffect(() => {
    const admin_post_load = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/admin_postLoad"
        );
        console.log(response.data.data);
        setdata(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    admin_post_load();
  }, [flag]);

  return (
    <>
      <h2>This is Admin Panel</h2>
      {data &&
        data.map((product) => {
          return (
            <CardComponent
              product={product}
              ApproveRequest={ApproveRequest}
              DeclineRequest={DeclineRequest}
            />
          );
        })}
    </>
  );
}

export default Adminpanel;
