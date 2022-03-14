import * as React from "react";
import { RWebShare } from 'react-web-share';
import { Box, Card, CardMedia, CardContent, IconButton, Typography, CardActions, Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import {
  modelPopUp,
  fetchDataForATF,
} from "../../AStatemanagement/Actions/userActions";
import { TimeSince } from "../TimeElapsed/timecalc";

// ===============================================================
// PRODUCT DATA BY PRODUCT ID

const CardContentNoPadding = styled(CardContent)(`
  &:last-child {
    padding-bottom: 8px;
  }
`);
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
}`);

const useStyles = makeStyles({
  image: {
    width: "100%",
    objectFit: "contain",
  },
});

export default function HomeCard(props) {
  //  console.log(props.cardData);
  // =============================================CARD DATA==============================================================================================
  const Image = props.cardData?.images[0]?.image;
  const title = props.cardData?.title.charAt(0).toUpperCase() + props.cardData?.title.slice(1);
  const date = new Date(props.cardData?.createdAt);
  const properDate = TimeSince(date);
  //  ============================================================================================================================================
  const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogin);
  const token = useSelector((state) => state.loginlogoutReducer.token);
  const dispatch = useDispatch();
  // ==================================================================================================================================
  const [likeButton, setLikeButton] = useState();

  React.useEffect(() => {
    setLikeButton(props.cardData.blue_heart);
  }, [props.cardData.blue_heart]);
  const LikeButtonHandler = () => {
    // console.log("likeButtonHandler");
    if (isLoggedIn) {
      // console.log(token);
      setLikeButton(!likeButton);
      const likeData = { productId: props.cardData._id, userToken: token };
      !likeButton && dispatch(fetchDataForATF({ ...likeData, isLiked: true }));
      likeButton && dispatch(fetchDataForATF({ ...likeData, isLiked: false }));
    } else {
      dispatch(modelPopUp(true));
    }
  };
  const Classes = useStyles();
  return (
    <HoverCard sx={{ maxWidth: "280px", borderRadius: 1, transition: `500ms transform ease` }} >
      <Link to={`/ProductDiscription/${props.cardData._id}`}>
        <CardMedia
          component="img"
          classes={{ img: Classes.image }}
          maxwidth="280px"
          sx={{ height: { xs: "160px", sm: "180px" }, p: { sm: 1.5, xs: 1 } }}
          image={Image}
          alt="Image"
        />
      </Link>

      <CardContentNoPadding
        sx={{ bgcolor: "#f5f5f5", pt: 0, px: 1, display: "flex" }}
      >
        <Box
          sx={{ maxwidth: "200px", display: "flex", flexDirection: "column" }}
        >
          <Typography
            variant="h6"
            noWrap
            sx={{
              maxWidth: { xs: 90, sm: 170 },
              fontWeight: "bold",
              fontSize: { xs: "small", md: "default" },
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ maxWidth: 155, fontSize: { xs: "x-small", sm: "default" } }}
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
          <IconButton
            aria-label="add to favorites"
            onClick={LikeButtonHandler}
            sx={{
              color: likeButton && isLoggedIn ? "#512da8" : "text.disabled",
              p: { xs: "4px", sm: "8px" },
            }}
          >
            <Tooltip title="Add to Favourites" arrow >
              <FavoriteIcon sx={{ fontSize: { xs: "medium", sm: "large" } }} />
            </Tooltip>
          </IconButton>
          <RWebShare
            data={{
              text: "Mnit Market",
              url: `http://localhost:3000/ProductDiscription/${props.cardData._id}`,
              title: `${title}`,
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <IconButton
              aria-label="share"
              sx={{
                color: "#512da8",
                p: { xs: "4px", sm: "8px" },
              }}
            >
              <Tooltip title="Share" arrow>
                <ShareIcon sx={{ fontSize: { xs: "medium", sm: "large" } }} />
              </Tooltip>
            </IconButton>
          </RWebShare>
        </CardActions>
      </CardContentNoPadding>
    </HoverCard>
  );
}
