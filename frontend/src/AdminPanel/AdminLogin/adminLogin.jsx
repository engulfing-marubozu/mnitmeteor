import React, { useEffect, useRef, useState } from "react";
import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  AdminInput,
  AdminloginStyle,
  CodeValidator,
  UnicodeValidator,
} from "../PanelStyling/adminAuthStyle";
export default function AdminLogin() {
  const [error, setError] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const inputRef = useRef();
  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmit) {
      console.log("call to backend");
    }
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
          <CodeValidator>{error.code}</CodeValidator>
        </Box>
      </Box>
    </>
  );
}
