import React from "react";
import { BannerBox } from "../_Styling/styling";
import { motion } from "framer-motion";
import ImageGallery from "react-image-gallery";
function FrontBanner() {
  return (
    // <BannerBox
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    // />
    <motion.div
      className="discriptioncardImage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* <ImageGallery showPlayButton={false}/> */}
    </motion.div>
  );
}

export default FrontBanner;
