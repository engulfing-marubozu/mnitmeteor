import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Box,
  Link,
} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AdminCardStyle } from "../PanelStyling/adminPanelStyling";
import { TimeSince } from "../../components/TimeElapsed/timecalc";
import ApproveAlert from "../PanelAlert.jsx/approveAlert";
import DeclineAlert from "../PanelAlert.jsx/declineAlert";
import "../PanelStyling/adminImageSlider.css";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
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

export default function ThreadPanel({ ApproveRequest, DeclineRequest, data }) {
  console.log(data);
  const [expanded, setExpanded] = React.useState(false);
  const date = new Date(data.createdAt);
  const properDate = TimeSince(date);
  const title =
    data?.title.trim().charAt(0).toUpperCase() + data?.title?.trim().slice(1);
  const userEmail = data?.users_mnit_id;
  const description = data?.description;
  const profilePic = data?.profile_pic;
  // const document = data?.document?.link;
  // const documentName = data?.document?.name;
  const document = data?.document;
  // =======================================================================================
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const classes = AdminCardStyle();
  // ======================================================================================
  return (
    <Box className={classes.container}>
      <Card sx={{ width: { xs: "100%", sm: "600px" } }}>
        <CardHeader
          avatar={<Avatar src={profilePic} />}
          title={userEmail}
          subheader={properDate}
        />
        <CardContent sx={{ py: 0 }}>
          <Typography variant="h6" sx={{ my: 1.5, lineHeight: 1.3 }}>
            {title}
          </Typography>

          <ReadMore words={220}>{description}</ReadMore>
          {document && (
            <Box>
              <Link
                className={classes.pdfContainer}
                href={document}
                target="_blank"
              >
                <PictureAsPdfIcon color="error" fontSize="small" />
                <Typography noWrap className={classes.fileName}>
                documentName
                </Typography>
              </Link>
            </Box>
          )}
        </CardContent>
        <CardActions disableSpacing sx={{ px: "1rem", py: "0rem" }}>
          <Typography className={classes.sellCatText}>Thread</Typography>
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
