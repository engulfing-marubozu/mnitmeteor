import * as React from "react";
import axios from "axios";
import { RWebShare } from "react-web-share";
import { motion } from "framer-motion";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import Tooltip from "@mui/material/Tooltip";
import ShareIcon from "@mui/icons-material/Share";
import Card from "@mui/material/Card";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import {useDispatch } from "react-redux";
import { fetchInterestedActions } from "../../../AStatemanagement/Actions/userActions";
import { TimeSince } from "../../TimeElapsed/timecalc";
import {
  CardStyleFirst,
  CardContentNoPadding,
  CardStyleSecond,
} from "../../_Styling/cardStyling";

export default function CardForInterestedProduct({ cardData }) {
  // =============================================CARD DATA===================================
  const Image = cardData.images[0].image;
  const title =
    cardData.title.trim().charAt(1).toUpperCase() + cardData.title.trim().slice(1);
  const date = new Date(cardData?.createdAt);
  const properDate = TimeSince(date);
  //  =========================================================================================
  const userAuthData = JSON.parse(window.localStorage.getItem("Zuyq!jef@}#e"));
  const token = userAuthData?.xezzi;
  const dispatch = useDispatch();
  // =========================================================================================
  const removeInteresetedHandler = () => {
    const interestedData = { productId: cardData?._id, userToken: token };
    const getData = async (token) => {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/checkstatus`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.status) {
        alert(
          `${response.data.attempts} attempts left for another ${response.data.ttl} seconds`
        );
        dispatch(
          fetchInterestedActions({
            ...interestedData,
            isInterested: false,
          })
        );
      } else {
        alert(
          `max attempts done. Please retry after ${response.data.ttl} seconds`
        );
      }
    };
    getData(token);
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
        <Card className={classes.card}>
          <Link to={`/productdescription/${cardData?._id}`}>
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
              <Typography className={classes.title} noWrap>
                {title}
              </Typography>
              <Typography className={classes.date}>{properDate}</Typography>
            </Box>
            <CardActions disableSpacing className={classes.cardActions}>
              <RWebShare
              data={{
                text: "Checkout this cool item from mnitmeteor",
                url: `${process.env.REACT_APP_REDIRECT}/productdescription/${cardData._id}`,
                title: title,
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <IconButton className={classes.iconButton}>
                <Tooltip title="Share" arrow>
                  <ShareIcon className={classes.Icon}  aria-label="share"/>
                </Tooltip>
              </IconButton>
              </RWebShare>
            </CardActions>
          </CardContentNoPadding>
        </Card>

        <Box className={classSec.zaction}>
          <IconButton
            onClick={removeInteresetedHandler}
            classes={{ root: classSec.crossIconButton }}
            size="small"
          >
            <Tooltip title="Remove" placement="right" arrow>
              <CloseIcon className={classSec.crossIcon}  aria-label="remove"/>
            </Tooltip>
          </IconButton>
        </Box>
      </Box>
    </motion.div>
  );
}
