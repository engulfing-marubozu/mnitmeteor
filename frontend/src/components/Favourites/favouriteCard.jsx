import React from "react";
import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import Tooltip from "@mui/material/Tooltip";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataForATF } from "../../AStatemanagement/Actions/userActions";
import { TimeSince } from "../TimeElapsed/timecalc";
import {
  CardStyleFirst,
  CardStyleSecond,
  CardContentNoPadding,
} from "../_Styling/cardStyling";

export default function FavouritesCard({ cardData }) {
  // console.log(cardData);
  // =============================================CARD DATA==============================================================================================
  const Image = cardData.images[0].image;
  const title =
    cardData.title.trim().charAt(0).toUpperCase() +
    cardData.title.trim().slice(1);
  const date = new Date(cardData.createdAt);
  const properDate = TimeSince(date);
  //  ============================================================================================================================================
  const userAuthData = JSON.parse(window.localStorage.getItem("Zuyq!jef@}#e"));
  const token = userAuthData?.xezzi;
  const isLogin = userAuthData?.oamp;
  const dispatch = useDispatch();
  // =========================================================================================================================================
  const removeFromFavouritesHandler = () => {
    if (isLogin) {
      const likeData = { productId: cardData._id, userToken: token };
      dispatch(
        fetchDataForATF({
          ...likeData,
          isLiked: false,
        })
      );
    }
  };
  const classes = CardStyleFirst();
  const classSec = CardStyleSecond();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box className={classSec.zMainBox}>
        <Card className={classes.card} elevation={3}>
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
            <Box className={classes.sizeBox}>
              <Typography noWrap className={classes.title}>
                {title}
              </Typography>
              <Typography className={classes.date}>{properDate}</Typography>
            </Box>
            <CardActions disableSpacing className={classes.cardActions}>
              <RWebShare
                data={{
                  text: "Mnit Market",
                  url: `${process.env.REACT_APP_API}ProductDiscription/${cardData._id}`,
                  title: title,
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <IconButton className={classes.iconButton}>
                  <Tooltip title="Share" arrow>
                    <ShareIcon className={classes.Icon} aria-label="share" />
                  </Tooltip>
                </IconButton>
              </RWebShare>
            </CardActions>
          </CardContentNoPadding>
        </Card>

        <Box className={classSec.zaction}>
          <IconButton
            onClick={removeFromFavouritesHandler}
            classes={{ root: classSec.crossIconButton }}
            size="small"
            aria-label="remove"
          >
            <Tooltip title="Remove" placement="right" arrow>
              <CloseIcon className={classSec.crossIcon} />
            </Tooltip>
          </IconButton>
        </Box>
      </Box>
    </motion.div>
  );
}
