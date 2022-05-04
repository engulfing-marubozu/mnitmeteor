import React from "react";
import {
  BannerBox,
} from "../_Styling/styling";

function FrontBanner() {
  return (
    <BannerBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />

  );
}

export default FrontBanner;
