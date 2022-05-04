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
import {
  CardStyleFirst,
  CardContentNoPadding,
} from "../../_Styling/cardStyling";
import { Link } from "react-router-dom";
import { TimeSince } from "../../TimeElapsed/timecalc";
import ProductDeleteAlert from "../../ModelPopUP/deleteAlert";

export default function CardForPublishedAds(props) {
  const Image = props.cardData?.images[0]?.image;
  const title =
    props.cardData.title.charAt(0).toUpperCase() +
    props.cardData.title.slice(1);
  const date = new Date(props.cardData.createdAt);
  const properDate = TimeSince(date);

  // ====================================================================

  const classes = CardStyleFirst();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Card className={classes.card}>
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
          <Box className={classes.sizeSecBox}>
            <Typography className={classes.title} noWrap>
              {title}
            </Typography>
            <Typography className={classes.date}>{properDate}</Typography>
          </Box>
          <CardActions disableSpacing className={classes.cardActions}>
            <ProductDeleteAlert productId={props.cardData._id} />
            <RWebShare
              data={{
                text: "Mnit Market",
                url: `${process.env.REACT_APP_API}/ProductDiscription/${props.cardData._id}`,
                title: title,
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <Tooltip title="Share" arrow>
                <IconButton className={classes.iconButton}>
                  <ShareIcon className={classes.Icon} />
                </IconButton>
              </Tooltip>
            </RWebShare>
          </CardActions>
        </CardContentNoPadding>
      </Card>
    </motion.div>
  );
}
