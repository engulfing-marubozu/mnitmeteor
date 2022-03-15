import React from "react";
import { RWebShare } from 'react-web-share'
import { Box, Tooltip, Card, CardMedia, CardContent, CardActions, IconButton, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataForATF } from "../../AStatemanagement/Actions/userActions";
import { TimeSince } from "../TimeElapsed/timecalc";

// ===============================================================
// PRODUCT DATA BY PRODUCT ID
const HoverCard = styled(Card)(`
&:hover{
  transform:scale(1.12);
  box-shadow: 0px 5px 6px -3px rgb(0 0 0 / 15%), 0px 9px 12px 1px rgb(0 0 0 / 14%), 0px 3px 16px 2px rgb(0 0 0 / 14%);
   @media (max-width: 600px) 
   {
   transform:scale(1.06);}
  @media (max-width: 502px) 
  {
    transform:scale(1.04);
  }  
}
`);
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
  crossIconButton: {
    color: "black",
    backgroundColor: "white",
    margin: 0.6,
    "&:hover": {
      backgroundColor: "white",
    },
  }
});

export default function FavouritesCard(props) {
  // console.log(props.cardData);
  // =============================================CARD DATA==============================================================================================
  const Image = props.cardData.images[0].image;
  const title = props.cardData.title.charAt(0).toUpperCase() + props.cardData.title.slice(1);
  const date = new Date(props.cardData.createdAt);
  const properDate = TimeSince(date);
  //  ============================================================================================================================================
  const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogin);
  const token = useSelector((state) => state.loginlogoutReducer.token);
  const dispatch = useDispatch();
  // =========================================================================================================================================
  const removeFromFavouritesHandler = () => {
    // console.log("likeButtonHandler");
    if (isLoggedIn) {
      const likeData = { productId: props.cardData._id, userToken: token };
      dispatch(
        fetchDataForATF({
          ...likeData,
          isLiked: false,
        })
      );
    }
  };
  const Classes = useStyles();

  return (
    <div
      style={{
        maxWidth: "280px",
        display: "flex",
        flexDirection: "column",
        position: "relative",

      }}
    >
      <HoverCard sx={{ maxwidth: "280px", borderRadius: 1, transition: `500ms transform ease` }} elevation={3}>
        <Link to={`/ProductDiscription/${props.cardData._id}`}>
          <CardMedia
            component="img"
            classes={{ img: Classes.image }}
            width="280px"
            sx={{ height: { xs: "160px", sm: "180px" }, p: { sm: 1.5, xs: 1 } }}
            image={Image}
            alt="Image"
          />
        </Link>
        <CardContentNoPadding
          sx={{ bgcolor: "#f5f5f5", pt: 0, px: 1, display: "flex" }}
        >
          <Box
            sx={{
              maxwidth: "200px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              sx={{
                maxWidth: { xs: 100, sm: 140 },
                fontWeight: "bold",
                fontSize: { xs: "small", md: "default" },
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                maxWidth: 155,
                fontSize: { xs: "x-small", sm: "default" },
              }}
            >
              {properDate}
            </Typography>
          </Box>

          <CardActions
            disableSpacing
            sx={{
              bgcolor: "#f5f5f5",
              justifyContent: "flex-end",
              flexGrow: 1,
              pt: 0,
              pb: 0,
            }}
          >
            <RWebShare
              data={{
                text: "Mnit Market",
                url: `http://localhost:3000/ProductDiscription/${props.cardData._id}`,
                title: title,
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <IconButton
                sx={{
                  color: "#512da8",
                  p: { xs: "4px", sm: "8px" },
                }}

              > <Tooltip title="Share" arrow >
                  <ShareIcon sx={{ fontSize: { xs: "medium", sm: "large" } }} />
                </Tooltip>
              </IconButton>
            </RWebShare>
          </CardActions>
        </CardContentNoPadding>
      </HoverCard>

      <div style={{ zIndex: 11, position: "absolute", right: "0px" }}>
        <IconButton onClick={removeFromFavouritesHandler} classes={{ root: Classes.crossIconButton }} size="small" >
          <Tooltip title='Remove' placement="right" arrow>
            <CloseIcon sx={{ fontSize: { xs: '14px', sm: '16px' }, }} />
          </Tooltip>
        </IconButton>
      </div>
    </div>
  );
}
