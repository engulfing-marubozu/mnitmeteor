import { styled } from "@mui/system";
import { motion } from "framer-motion";
import image3 from "./Images/image3.png";
import image4 from "./Images/image4.png";
import image5 from "./Images/image5.png";
export const ChildrenBox = styled("div")({
  paddingBottom: "90px",
  "@media(max-width:500px)": {
    paddingBottom: "140px",
  },
});
export const BannerBox = styled(motion.div)({
  width: "100%",
  display: "flex",
  height: "320px",
  animation: "backgroundChange 30s linear infinite",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative",

  "@keyframes backgroundChange": {
    "0%": {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),url(${image4})`,
    },
    "50%": {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),url(${image3})`,
    },
    "100%": {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)),url(${image5})`,
    },
  },
});

export const MainTextBox = styled("div")({
  position: "absolute",
  color: "white",
  fontWeight: "bold",
  fontSize: "3rem",
  top: "5.25rem",
  left: "4.5rem",
  // "@media(max-width:500px)": {
  //   paddingBottom: "140px",
  // },
});

export const SmallTextBox = styled("div")({
  position: "absolute",
  color: "white",
  fontWeight: "bold",
  fontSize: "1.3rem",
  top: "12.25rem",
  left: "4.5rem",
});

export const TextOne = styled("p")({
  animation: "textOpacity 10s linear infinite",
  color: "white",
  fontWeight: "bold",
  fontSize: "1.3rem",
  "@keyframes textOpacity": {
    "0%": {
      opacity: 1,
    },
    "50%": {
      opacity: 0,
    },
    "100%": {
      opacity: 0,
    },
  },
});
export const TextTwo = styled("p")({
  animation: "textOpacity 10s linear infinite",
  "@keyframes textOpacity": {
    "0%": {
      opacity: 0,
    },
    "50%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
    },
  },
});
export const TextThree = styled("p")({
  animation: "textOpacity 10s linear infinite",
  "@keyframes textOpacity": {
    "0%": {
      opacity: 0,
    },
    "50%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
});
