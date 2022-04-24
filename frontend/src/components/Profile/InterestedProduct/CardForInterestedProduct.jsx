import * as React from "react";
// import { RWebShare } from "react-web-share";
import {
  Card,
  CardMedia,
  CardActions,
  IconButton,
  Typography,
  Box,
  Tooltip,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataForInterestedProduct } from "../../../AStatemanagement/Actions/userActions";
import { TimeSince } from "../../TimeElapsed/timecalc";
import {
  CardStyleFirst,
  CardContentNoPadding,
  CardStyleSecond,
} from "../../_Styling/cardStyling";

export default function CardForInterestedProduct({ cardData }) {
  // console.log(cardData);
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
  const removeInteresetedHandler = () => {
    const interestedData = { productId: cardData?._id, userToken: token };
    dispatch(
      fetchDataForInterestedProduct({
        ...interestedData,
        isInterested: false,
      })
    );
  };

  const classes = CardStyleFirst();
  const classSec = CardStyleSecond();
  return (
    <Box className={classSec.zMainBox}>
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
          <Box className={classes.sizeBox}>
            <Typography className={classes.title} noWrap>
              {title}
            </Typography>
            <Typography className={classes.date}>{properDate}</Typography>
          </Box>
          <CardActions disableSpacing className={classes.cardActions}>
            {/* <RWebShare
              data={{
                text: "Mnit Market",
                url: `http://localhost:3000/ProductDiscription/${cardData._id}`,
                title: title,
              }}
              onClick={() => console.log("shared successfully!")}
            > */}
            <IconButton className={classes.iconButton}>
              <Tooltip title="Share" arrow>
                <ShareIcon className={classes.Icon} />
              </Tooltip>
            </IconButton>
            {/* </RWebShare> */}
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
            <CloseIcon className={classSec.crossIcon} />
          </Tooltip>
        </IconButton>
      </Box>
    </Box>
  );
}
