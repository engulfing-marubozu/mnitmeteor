import * as React from "react";
import { RWebShare } from "react-web-share";
import {
  Card,
  CardMedia,
  CardActions,
  IconButton,
  Typography,
  Box,
  Tooltip,
} from "@mui/material";
import {
  CardStyleFirst,
  CardContentNoPadding,
} from "../../_Styling/cardStyling";
import { Link } from "react-router-dom";
import { TimeSince } from "../../TimeElapsed/timecalc";
import ShareIcon from "@mui/icons-material/Share";
import ProductDeleteAlert from "../../ModelPopUP/deleteAlert";

export default function CardForPublishedAds(props) {
  // console.log(props.cardData);
  // =============================================CARD DATA=============
  const Image = props.cardData?.images[0]?.image;
  const title =
    props.cardData.title.charAt(0).toUpperCase() +
    props.cardData.title.slice(1);
  const date = new Date(props.cardData.createdAt);
  const properDate = TimeSince(date);

  // ====================================================================

  const classes = CardStyleFirst();
  return (
    <Card className={classes.card}>
      <Link to={`/ProductDiscription/${props.cardData._id}`}>
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
              url: `http://localhost:3000/ProductDiscription/${props.cardData._id}`,
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
  );
}
