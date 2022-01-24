import * as React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Box,
  styled,
  Button,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// // import {
//   modelPopUp,
//   fetchDataForATF,
// } from "../../AStatemanagement/Actions/userActions";

// ===============================================================
// PRODUCT DATA BY PRODUCT ID

const CardContentNoPadding = styled(CardContent)(`

  &:last-child {
    padding-bottom: 8px;
  }
`);
const useStyles = makeStyles({
  image: {
    width: "100%",
    objectFit: "contain",
  },
});
const ColorButton = styled(Button)(({ theme }) => ({
  lineHeight: 1.5,
  borderColor: deepPurple[700],
  color: "black",
  fontSize: "0.6rem",
  backgroundColor: "transparent",
  "&:hover": {
    borderColor: deepPurple[700],
    color: "white",
    backgroundColor: deepPurple[700],
  },
}));

export default function CardForPublishedAds(props) {
  // console.log(props.cardData);
  // =============================================CARD DATA==============================================================================================
  const Image = props.cardData.images[0];
  const title =
    props.cardData.title.charAt(0).toUpperCase() +
    props.cardData.title.slice(1);
  const date = new Date(props.cardData.createdAt);
  const properDate = `${date.toLocaleString("default", {
    month: "short",
  })} ${date.getDate()}, ${date.getFullYear()}`;

  //  ============================================================================================================================================
  //   const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogin);
  //   const token = useSelector((state) => state.loginlogoutReducer.token);
  //   const dispatch = useDispatch();
  // =========================================================================================================================================
  const Classes = useStyles();

  return (
    <Card
      sx={{
        maxwidth: "260px",
        borderRadius: 1,
        margin: { lg: "20px", xs: "10px" },
      }}
    >
      <Link to={`/ProductDiscription/${props.cardData._id}`}>
        <CardMedia
          component="img"
          classes={{ img: Classes.image }}
          width="260px"
          sx={{ height: { xs: "160px", sm: "180px" } }}
          image={Image}
          alt="Image"
        />
      </Link>

      <CardContentNoPadding
        sx={{
          bgcolor: "#f5f5f5",
          pt: 0,
          px: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h6"
          noWrap
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "medium" },
            py: "5px",
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              maxwidth: "100px",
              fontSize: { xs: "x-small", sm: "default" },
            }}
          >
            {properDate}
          </Typography>

          <CardActions
            disableSpacing
            sx={{
              bgcolor: "#f5f5f5",
              px: 0,
              py: 0,
              alignItems: "flex-start",
            }}
          >
            <IconButton
              aria-label="share"
              sx={{
                color: "#512da8",
                p: "0.25rem",
                mr: "0.3rem",
              }}
            >
              <ShareIcon sx={{ fontSize: { xs: "medium", sm: "large" } }} />
            </IconButton>
            <ColorButton variant="outlined"> Delete </ColorButton>
          </CardActions>
        </Box>
      </CardContentNoPadding>
    </Card>
  );
}
