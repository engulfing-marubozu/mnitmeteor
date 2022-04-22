import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography, Paper, Button, styled } from "@mui/material";
import { useSelector } from "react-redux";
import poster from "../Images/poster.jpg";
import profileIcon from "./profileIcon.svg";
import UpdatePhoneNo from "./UpdateProfile";
import { ToastContainer, toast } from "react-toastify";
import Collapse from "@mui/material/Collapse";
import "react-toastify/dist/ReactToastify.css";
// ========================================================MAIN FUNCTION=================================================================

export default function ProfilePage(props) {
  // ==========================================================GETTING DETAILS FROM STATE-REDUX =================================================
  //  const dispatch = useDispatch();
  // const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogin);
  //  const token = useSelector((state) => state.loginlogoutReducer.token);
  const userData = useSelector((state) => state.loginlogoutReducer.userData);
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return (
      <Button sx={{ color: "#5e35b1", py: 0.2 }} {...other}>
        {!expand && "update"}
        {expand && "cancel"}
      </Button>
    );
  })(({ theme, expand }) => ({
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  // ==================================================HANDLERS ====================================================================================
  const [openUpdate, setOpenUpdate] = useState(false);
  const notify = (value) => toast(value);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const updateHandler = () => {
    setOpenUpdate(!openUpdate);
  };
  return (
    <div>
      <Box
        sx={{
          // bgcolor: "#5e35b1",
          width: "100%",
          height: "280px",
          borderRadius: 0,
        }}
      >
        <img src={poster} alt="backgroundposter" />
      </Box>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: { xs: "center", sm: "space-between" },
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "center", sm: "flex-end" },
          }}
        >
          <Paper
            sx={{
              // borderRadius: "50%",
              width: { xs: "100px", sm: "138px" },
              height: { xs: "100px", sm: "138px" },
              position: "absolute",
              left: { sm: "6rem" },
              // right:50,
              top: { xs: "-4.2rem" },
            }}
            elevation={0}
          >
            <img src={profileIcon} alt="profileicon" />
          </Paper>
          <Box
            sx={{
              pt: { xs: 8, sm: 3 },
              pb: { xs: 0, sm: 4 },
              ml: { sm: "15rem", xs: "0" },
            }}
          >
            <Box display="flex" direction="row">
              <Typography variant="body1" fontWeight="bold">
                Email:
              </Typography>
              <Typography variant="body2" sx={{ pt: "0.2rem", px: "1.4rem" }}>
                {userData?.email}
              </Typography>
            </Box>

            <Box display="flex" direction="row" sx={{ pt: 0 }}>
              <Typography variant="body1" fontWeight="bold">
                Phone:
              </Typography>
              <Typography variant="body2" sx={{ pt: "0.2rem", px: "1rem" }}>
                {userData?.Mobile_no}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              mr: { xs: 3.5, md: 12.5 },
              width: { xs: "100%", sm: "auto" },
              display: { xs: "flex", justifyContent: "flex-end" },
            }}
          >
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
            ></ExpandMore>
          </Box>
        </Box>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <UpdatePhoneNo closeUpdate={updateHandler} notify={notify} />
        </Collapse>
        <ToastContainer />
      </Box>
    </div>
  );
}
