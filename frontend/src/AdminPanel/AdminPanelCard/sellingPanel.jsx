import * as React from "react";
import { styled } from "@mui/material/styles";
import { Card, CardContent, CardActions, Box } from "@mui/material";
import Collapse from "@mui/material/Collapse";
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

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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

function SellingPanel({ data, ApproveRequest, DeclineRequest }) {
  const [expanded, setExpanded] = React.useState(false);
  const imageThumbnail = data?.images;
  const title = data.title?.trim().charAt(0).toUpperCase() + data.title?.trim().slice(1);
  const date = new Date(data.createdAt);
  const properDate = TimeSince(date);
  const description = data.description;
  const category = data.category;
  const images =
    typeof imageThumbnail !== "undefined"
      ? imageThumbnail.map((img, index) => {
          return {
            original: `${imageThumbnail[index]?.image}`,
          };
        })
      : false;

  // =======================================================================================
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const classes = AdminCardStyle();
  // =======================================================================================================================
  return (
    <Box className={classes.container}>
      <Card sx={{ width: { xs: "100%", sm: "600px" } }}>
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
          <Typography variant="h6">{title}</Typography>
          <ReadMore words={220}>
            {description}
          </ReadMore>
          {/* </Typography> */}
        </CardContent>
        <CardActions disableSpacing sx={{ px: "1rem" }}>
          <Box className={classes.sellCategoryBox}>
            <Typography> category : </Typography>
            <Typography className={classes.sellCatText}> {category}</Typography>
            <Typography> {properDate}</Typography>
          </Box>
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

export default SellingPanel;
