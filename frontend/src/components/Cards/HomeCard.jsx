import * as React from "react";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { styled } from "@mui/material/styles";


// ===============================================================
// PRODUCT DATA BY PRODUCT ID 

















const CardContentNoPadding = styled(CardContent)(`

  &:last-child {
    padding-bottom: 8px;
  }
`);
const Image = "https://source.unsplash.com/random";
const useStyles = makeStyles({
  image: {
    width: "100%",
    objectFit: "contain",
  },
});

export default function HomeCard(props) {

  const [likeButton, setLikeButton] = useState(false);
  const LikeButtonHandler = () => {
    console.log("likeButtonHandler");
    setLikeButton(!likeButton);
  };
  const Classes = useStyles();
  return (
    <Card sx={{ maxWidth: "280px", borderRadius: 1 }} elevation="3">
      <Link to={`/product/${props.productId}`}>
        <CardMedia
          component="img"
          classes={{ img: Classes.image }}
          Width="280px"
          sx={{ height: { xs: "160px", sm: "180px" } }}
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
              maxWidth: { xs: 90, sm: 120 },
              fontWeight: "bold",
              fontSize: { xs: "small", md: "default" },
            }}
          >
            Herculus Cylceadsfdas
          </Typography>
          <Typography
            variant="body2"
            sx={{ maxWidth: 155, fontSize: { xs: "x-small", sm: "default" } }}
          >
            Sep 14, 2016
          </Typography>
        </Box>

        <CardActions
          container
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
              color: likeButton ? "#512da8" : "text.disabled",
              p: { xs: "4px", sm: "8px" },
            }}
          >
            <FavoriteIcon sx={{ fontSize: { xs: "medium", sm: "large" } }} />
          </IconButton>

          <IconButton
            aria-label="share"
            sx={{
              color: "#512da8",
              p: { xs: "4px", sm: "8px" },
            }}
          >
            <ShareIcon sx={{ fontSize: { xs: "medium", sm: "large" } }} />
          </IconButton>
        </CardActions>
      </CardContentNoPadding>
    </Card>
  );
}
