import * as React from "react";
import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import Tooltip from "@mui/material/Tooltip";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  modelPopUp,
  fetchDataForATF,
} from "../../AStatemanagement/Actions/userActions";
import { TimeSince } from "../TimeElapsed/timecalc";
import {
  HoverCard,
  CardContentNoPadding,
  CardStyleFirst,
  CardStyleSecond,
} from "../_Styling/cardStyling";

export default function HomeCard({ cardData, index }) {
  const [likeButton, setLikeButton] = useState(false);
  const Image = cardData?.images[0]?.image;
  const title =
    cardData?.title.charAt(0).toUpperCase() + cardData?.title.slice(1);
  const date = new Date(cardData?.createdAt);
  const properDate = TimeSince(date);
  //  ============================================================================================
  const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogin);
  const token = useSelector((state) => state.loginlogoutReducer.token);
  const dispatch = useDispatch();
  // ==============================================================================================

  React.useEffect(() => {
    setLikeButton(cardData.blue_heart);
    // return ()=>{s
  }, [cardData.blue_heart]);

  const LikeButtonHandler = () => {
    if (isLoggedIn) {
      // console.log(token);
      setLikeButton(!likeButton);
      const likeData = { productId: cardData._id, userToken: token };
      !likeButton && dispatch(fetchDataForATF({ ...likeData, isLiked: true }));
      likeButton && dispatch(fetchDataForATF({ ...likeData, isLiked: false }));
    } else {
      dispatch(modelPopUp(true));
    }
  };
  const classes = CardStyleFirst();
  const classSec = CardStyleSecond();

  // ===================================================================================================================================
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HoverCard className={classSec.hoverCard}>
        <Link to={`/productdescription/${cardData._id}`}>
          <CardMedia
            component="img"
            classes={{ img: classes.image }}
            className={classes.cardMedia}
            image={Image}
            alt="Image"
          />
        </Link>

        <CardContentNoPadding className={classes.cardContent}>
          <Box className={classes.sizeSecBox}>
            <Typography noWrap className={classes.title}>
              {title}
            </Typography>
            <Typography className={classes.date}>{properDate}</Typography>
          </Box>

          <CardActions disableSpacing className={classes.cardActions}>
            <IconButton
              onClick={LikeButtonHandler}
              sx={{
                p: "0.25rem",
                color: likeButton && isLoggedIn ? "#512da8" : "text.disabled",
              }}
            >
              <Tooltip title="Add to Favourites" arrow>
                <FavoriteIcon className={classes.Icon} />
              </Tooltip>
            </IconButton>
            <RWebShare
              data={{
                text: "Mnit Market",
                url: `${process.env.REACT_APP_API}ProductDiscription/${cardData._id}`,
                title: `${title}`,
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <IconButton className={classes.iconButton}>
                <Tooltip title="Share" arrow>
                  <ShareIcon className={classes.Icon} />
                </Tooltip>
              </IconButton>
            </RWebShare>
          </CardActions>
        </CardContentNoPadding>
      </HoverCard>
     </motion.div>
  );
}
