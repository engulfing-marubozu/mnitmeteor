import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { LinkStyle } from "./linkStyle";
import { DevButton } from "./linkStyle";
import { useNavigate } from "react-router-dom";
function DevelopersNote() {
  const Navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const classes = LinkStyle();
  return (
    <Box className={classes.mainBox}>
      <Typography className={classes.heading}>
        {"<Developer's Note/>"}
      </Typography>
      <Box>
        <Box className={classes.reverseContainer}>
          <Box className={classes.startCntContainer}>
            <Box className={classes.contentBox}>
              College life is tough..isn’t it? Searching for course books,
              trying to find your lost bottle, or most important, finding resume
              worthy projects. While we cannot remove all the burden, we can
              certainly remove the logs a bit. Want to know how? <br />.<br /> .
              <br /> .<br /> . <br />
              Keep scrolling!
            </Box>
          </Box>
          <Box className={classes.imageBox}>
            <img
              src={
                "https://res.cloudinary.com/mnitmarket/image/upload/v1652281851/product_ul77jf.svg"
              }
              className={classes.image}
              alt="books"
            />
          </Box>
        </Box>
        <Box className={classes.container}>
          <Box className={classes.imageBox}>
            <img
              src={
                "https://res.cloudinary.com/mnitmarket/image/upload/v1654111297/map_jrgdol.svg"
              }
              className={classes.image}
              alt="books"
            />
          </Box>
          <Box className={classes.endCntContainer}>
            <Box className={classes.contentBox}>
              Do you know what's the location shown on this map? Yep, this is
              our daily routine here at MNIT, from hostel to classrooms to labs
              to tutorial classrooms to canteens to playground. Ain't this a bit
              hectic :) For people like us who have to attend a class 10 minutes
              after we wake up, it sure is. A cycle helps tremendously in these
              cases. <br />
              Having a cooler is like a blessing, given Jaipur’s scorching heat
              and our institute’s timetable. All of this, while staying on a
              limited budget, is nearly impossible to buy.
              <br />
              How about we take some help from those who don’t need these items
              anymore?
            </Box>
            <Box className={classes.buttonBox}>
              <DevButton onClick={() => Navigate("/")}>Buy & Sell</DevButton>
            </Box>
          </Box>
        </Box>
        <Box className={classes.reverseContainer}>
          <Box className={classes.startCntContainer}>
            <Box className={classes.contentBox}>
              Ever stuck searching for students with similar interests or
              expertise with some particular tech stack for a competition or a
              project ? Or simply wanted to ask something about internship or
              placements to your seniors?
              <br /> PhDs/Professors, if they require students for their
              projects, can post the details here for better dissemination of
              information. Or simply, you can ask any query here.
              <br />
              <br />
              We believe, proper communication is the threshold to innovation in
              the campus, and with ever growing community of talented people in
              our campus, a Community platform is absolutely critical.
            </Box>
            <Box className={classes.buttonBox}>
              <DevButton onClick={() => Navigate("/discussions")}>
                Community
              </DevButton>
            </Box>
          </Box>
          <Box className={classes.imageBox}>
            <img
              src={
                "https://res.cloudinary.com/mnitmarket/image/upload/v1652462821/dee3_q9e6cg.svg"
              }
              className={classes.image}
              alt="books"
            />
          </Box>
        </Box>
        <Box className={classes.container}>
          <Box className={classes.imageBox}>
            <img
              src={
                "https://res.cloudinary.com/mnitmarket/image/upload/v1650803479/Curious-rafiki_pz4bpy.svg"
              }
              className={classes.image}
              alt="books"
            />
          </Box>
          <Box className={classes.endCntContainer}>
            <Box className={classes.contentBox}>
              This doesn’t needs explanation--just look at plethora of lost &
              found emails in your email box. There is a high probability that
              these emails might get ignored. We don’t want that to happen, in
              the Lost and Found section, you can upload details of what you've
              lost, and whoever finds it will get in touch.
              <br />
              Or if you've found something, you can upload its details as well
              to help out the owner.
              <br /> Just remember to add "Treat expected" in the description to
              make it a proper tradeoff :)
            </Box>
            <Box className={classes.buttonBox}>
              <DevButton onClick={() => Navigate("/lost&found")}>
                Lost&Found
              </DevButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DevelopersNote;
