import * as React from "react";
import { RWebShare } from "react-web-share";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Box,
  styled,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import ProductDeleteAlert from "../../ModelPopUP/deleteAlert";
import { TimeSince } from "../../TimeElapsed/timecalc";
// ===============================================================
// PRODUCT DATA BY PRODUCT ID

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
});

export default function CardForPublishedAds(props) {

  // console.log(props.cardData);
  // =============================================CARD DATA==============================================================================================
  const Image = props.cardData?.images[0]?.image;
  const title = props.cardData.title.charAt(0).toUpperCase() + props.cardData.title.slice(1);
  const date = new Date(props.cardData.createdAt);
  const properDate = TimeSince(date);

  // =========================================================================================================================================

  const Classes = useStyles();
  return (
    <Card
      sx={{
        maxwidth: "260px",
        borderRadius: 1,
        margin: { lg: "20px", xs: "10px" },
      }}
    >
      <Link to={`/ProductDiscription/${props.cardData._id}`}>
        <CardMedia
          component="img"
          classes={{ img: Classes.image }}
          width="260px"
          sx={{ height: { xs: "160px", sm: "180px" } }}
          image={Image}
          alt="Image"
        />
      </Link>

      <CardContentNoPadding
        sx={{
          bgcolor: "#f5f5f5",
          pt: 0,
          px: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h6"
          noWrap
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              maxwidth: "100px",
              fontSize: { xs: "x-small", sm: "default" },
            }}
          >
            {properDate}
          </Typography>

          <CardActions
            disableSpacing
            sx={{
              bgcolor: "#f5f5f5",
              px: 0,
              py: 0,
              alignItems: "flex-start",
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
                aria-label="share"
                sx={{
                  color: "#512da8",
                  p: "0.25rem",
                  mr: "0.3rem",
                }}
              >
                <ShareIcon sx={{ fontSize: { xs: "medium", sm: "large" } }} />
              </IconButton>
            </RWebShare>

            <ProductDeleteAlert productId={props.cardData._id} />
          </CardActions>
        </Box>
      </CardContentNoPadding>
    </Card>
  );
}
