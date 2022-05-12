import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import {
  AdminInput,
  AdminLoginStyle,
  CodeValidator,
  UnicodeValidator,
} from "../PanelStyling/adminAuthStyle";
export default function AdminLogin() {
  const [error, setError] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [warning, setWarning] = useState("");
  const inputRef = useRef();
  const Navigate = useNavigate();
  const userAuthData = JSON.parse(window.localStorage.getItem("Zuyq!jef@}#e"));
  const token = userAuthData?.xezzi;

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
      const run = async () => {
        try {
          //unicode should not be entered wrong more than 5 times
          const response = await axios.post(
            `${process.env.REACT_APP_API}/admin_verification`,
            { unicode: inputRef.current.value },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.data.code === 88) {
            setWarning(response.data.message);
          } else if (response.data.code === 403) {
            setWarning(response.data.message);
          } else if (response.data.code === 77) {
            setWarning("");
            const cred = {
              dabirc: "5u7nJmsU.J5p3rA`c*9-",
              waox: response.data.token,
            };
            window.localStorage.setItem("Bgp_pejbsv/+/&}s", JSON.stringify(cred));
            Navigate("/adminportel");
          }
        } catch (err) {
          console.log(err);
        }
      };
      run();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isSubmit]);

  const SubmitHandler = (event) => {
    event.preventDefault();
    const value = inputRef.current.value;
    setError(UnicodeValidator(value));
    setIsSubmit(true);
  };
  const classes = AdminLoginStyle();
  return (
    <>
      <Box className={classes.mainBox}>
        <Box className={classes.actionBox}>
          <IconButton onClick={() => Navigate("/")}>
            <CloseIcon className={classes.closeIcon} />
          </IconButton>
        </Box>
        <Box className={classes.container}>
          <form onSubmit={SubmitHandler}>
            <AdminInput
              autoComplete="off"
              type="password"
              id="adminlogin"
              name="adminlogin"
              placeholder="Enter the UniCode"
              ref={inputRef}
            />
          </form>
          {error.code && <CodeValidator>{error.code}</CodeValidator>}
          {warning && !error.code && <CodeValidator>{warning}</CodeValidator>}
        </Box>
      </Box>
    </>
  );
}
