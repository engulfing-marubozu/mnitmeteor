import React, { useEffect, useRef, useState } from "react";
import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import {
  AdminInput,
  AdminloginStyle,
  CodeValidator,
  UnicodeValidator,
} from "../PanelStyling/adminAuthStyle";
export default function AdminLogin() {
  const [error, setError] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [warning, setWarning] = useState("");
  const inputRef = useRef();
  const localStorageData = JSON.parse(window.localStorage.getItem("auth"));
  const token = localStorageData?.token;
  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
      const run = async () => {
        try {
          console.log("toek " + token);
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
          console.log(response.data);
          if(response.status===403){
          setWarning(response.data);
          }else if(response.status===200){
             
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
  const classes = AdminloginStyle();
  return (
    <>
      <Box className={classes.mainBox}>
        <Box className={classes.actionBox}>
          <IconButton>
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
