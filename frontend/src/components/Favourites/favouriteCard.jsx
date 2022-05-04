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

export default function FavouritesCard(props) {
  // console.log(props.cardData);
  // =============================================CARD DATA==============================================================================================
  const Image = props.cardData.images[0].image;
  const title =
    props.cardData.title.charAt(0).toUpperCase() +
    props.cardData.title.slice(1);
  const date = new Date(props.cardData.createdAt);
  const properDate = TimeSince(date);
  //  ============================================================================================================================================
  const isLoggedIn = useSelector((state) => state.loginlogoutReducer.isLogin);
  const token = useSelector((state) => state.loginlogoutReducer.token);
  const dispatch = useDispatch();
  // =========================================================================================================================================
  const removeFromFavouritesHandler = () => {
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
          <Link to={`/productdescription/${props.cardData._id}`}>
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
                  url: `http://localhost:3000/productdescription/${props.cardData._id}`,
                  title: title,
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
        </Card>

        <Box className={classSec.zaction}>
          <IconButton
            onClick={removeFromFavouritesHandler}
            classes={{ root: classSec.crossIconButton }}
            size="small"
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
