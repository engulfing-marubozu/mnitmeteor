import * as React from "react";
import { RWebShare } from "react-web-share";
import {
  Card,
  CardMedia,
  CardActions,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataForInterestedProduct } from "../../../AStatemanagement/Actions/userActions";
import { TimeSince } from "../../TimeElapsed/timecalc";
import { ColorButton } from "../../ModelPopUP/ModelPopUpStyling";
import {
  ProfileCardStyle,
  CardContentNoPadding,
} from "../ProfileStyling/profileCardStyling";

export default function CardForInterestedProduct({ cardData }) {
  console.log(cardData);
  // =============================================CARD DATA===================================
  const Image = cardData.images[0].image;
  const title =
    cardData.title?.charAt(1).toUpperCase() + cardData?.title.slice(1);
  const date = new Date(cardData?.createdAt);
  const properDate = TimeSince(date);
  //  =========================================================================================
  const token = useSelector((state) => state.loginlogoutReducer.token);
  const dispatch = useDispatch();
  // =========================================================================================
  const removeInteresetedClickHandler = () => {
    const interestedData = { productId: cardData?._id, userToken: token };
    dispatch(
      fetchDataForInterestedProduct({
        ...interestedData,
        isInterested: false,
      })
    );
  };

  const classes = ProfileCardStyle();
  return (
    <Card className={classes.card}>
      <Link to={`/ProductDiscription/${cardData?._id}`}>
        <CardMedia
          component="img"
          classes={{ img: classes.image }}
          className={classes.cardMedia}
          image={Image}
          alt="Image"
        />
      </Link>
      <CardContentNoPadding className={classes.cardContent}>
        <Typography className={classes.title} noWrap>
          {title}
        </Typography>
        <CardActions disableSpacing className={classes.cardActions}>
          <Typography className={classes.date}>{properDate}</Typography>
          <Box className={classes.actionBox}>
            {/* <RWebShare
              data={{
                text: "Mnit Market",
                url: `http://localhost:3000/ProductDiscription/${cardData._id}`,
                title: title,
              }}
              onClick={() => console.log("shared successfully!")}
            > */}
            <IconButton className={classes.iconButton}>
              <ShareIcon className={classes.Icon} />
            </IconButton>
            {/* </RWebShare> */}
            <ColorButton
              variant="outlined"
              onClick={removeInteresetedClickHandler}
            >
              Remove
            </ColorButton>
          </Box>
        </CardActions>
      </CardContentNoPadding>
    </Card>
  );
}
