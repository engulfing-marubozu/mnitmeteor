import * as React from "react";
import { styled } from "@mui/material/styles";
import { Card, CardHeader, CardContent, CardActions, Box } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AdminCardStyle } from "../PanelStyling/adminPanelStyling";
import ImageGallery from "react-image-gallery";
import { TimeSince } from "../../components/TimeElapsed/timecalc";
import "../PanelStyling/adminImageSlider.css";
import ApproveAlert from "../PanelAlert.jsx/approveAlert";
import DeclineAlert from "../PanelAlert.jsx/declineAlert";
import ReadMore from "../../components/_Styling/readmore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function LostFoundPanel({
  data,
  ApproveRequest,
  DeclineRequest,
}) {
  const [expanded, setExpanded] = React.useState(false);
  const date = new Date(data.createdAt);
  const properDate = TimeSince(date);
  const itemName =
    data?.name?.trim().charAt(0).toUpperCase() + data?.name?.trim().slice(1);
  const userEmail = data?.email?.trim().slice(0,-11);
  const category = data?.category;
  const description = data?.description;
  const images =
    data.imgs.length > 0
      ? data.imgs.map((img, index) => {
          return {
            original: `${img.image}`,
          };
        })
      : false;
  // =======================================================================================
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const classes = AdminCardStyle({ category: category });
  // ======================================================================================
  return (
    <Box className={classes.container}>
      <Card sx={{ width: { xs: "100%", sm: "600px" } }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: "black" }} />}
          title={userEmail}
          subheader={properDate}
        />
        <Box className="panelImageStyle">
          {images && (
            <ImageGallery
              items={images}
              showThumbnails={false}
              showPlayButton={false}
              showFullscreenButton={false}
            />
          )}
        </Box>
        <CardContent sx={{ py: 0 }}>
          <Typography variant="body1">{itemName}</Typography>
          <ReadMore words={220}>{description}</ReadMore>
        </CardContent>
        <CardActions disableSpacing sx={{ px: "1rem" }}>
          <Typography className={classes.lfCategory}> {category}</Typography>
          <ExpandMore expand={expanded} onClick={handleExpandClick}>
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardActions sx={{ px: "1rem", pb: "1rem", display: "flex" }}>
            <ApproveAlert
              ApproveRequest={ApproveRequest}
              data={data}
              handleExpandClick={handleExpandClick}
            />
            <DeclineAlert
              DeclineRequest={DeclineRequest}
              data={data}
              handleExpandClick={handleExpandClick}
            />
          </CardActions>
        </Collapse>
      </Card>
    </Box>
  );
}
