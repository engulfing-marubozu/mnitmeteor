import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { LinkStyle } from "./linkStyle";
function DevelopersNote() {
  const classes = LinkStyle();
  return (
    <Box className={classes.mainBox}>
      <Typography className={classes.heading}> Developer's Note</Typography>
      <Box sx={{ py: "2rem" }}>
        <Box className={classes.container}>
          <Box className={classes.contentContainer}>
            <Box className={classes.contentBox}>
              College life is tough..isn’t it? Searching for course books,
              trying to find your lost bottle, or most important, finding resume
              worthy projects. While we cannot remove all the burden, we can
              certainly remove the logs a bit. Want to know how?
              <br />.<br /> .<br /> .<br /> Keep scrolling!
            </Box>
          </Box>
          <Box className={classes.imageBox}>
            <img
              src={
                "https://res.cloudinary.com/mnitmarket/image/upload/v1652043553/Reading_book-pana_mtnhex.svg"
              }
              style={{ width: "100%", height: "420px", objectFit: "contain" }}
              alt="books"
            />
          </Box>
        </Box>
        <Box className={classes.container}>
          <Box className={classes.imageBox}>
            {/* <img src={} alt="books"/> */}
          </Box>
          <Box className={classes.contentContainer}>
            <Box className={classes.contentBox}>
              Do you know what's the location shown on this map? Yep, this is
              our daily routine here at MNIT, from hostel to classrooms to labs
              to tutorial classrooms to canteens to playground. Ain't this a bit
              hectic :) For people like us who have to attend a class 10 minutes
              after we wake up, it sure is. A cycle helps tremendously in these
              cases. Having a cooler is like a blessing, given Jaipur’s weather
              and institute’s timetable. All of this, while staying on a limited
              budget, is nearly impossible to buy.
              <br />
              How about we take some help from those who don’t need these items
              anymore?
            </Box>
          </Box>
        </Box>
        <Box className={classes.container}>
          <Box className={classes.contentContainer}>
            <Box className={classes.contentBox}>
              We remember a time when we wanted to do a project, but couldn’t
              find an appropriate teammember for the same, the reason was simple
              -- we didn’t reach out enough people in college. Had, this portal
              been active then, we probably would have done that project.
              <br />
              <br /> There are some instances of lost opportunities due to
              miscommnication -- a PhD scholar wanted some UG students for her
              new research paper, but couldn’t find any. Think about it, a
              research paper with your name written on it as a UG?!!
            </Box>
          </Box>
          <Box className={classes.imageBox}>
            {/* <img src={} alt="books"/> */}
          </Box>
        </Box>
        <Box className={classes.container}>
          <Box className={classes.imageBox}></Box>
          <Box className={classes.contentBox}>
            This doesn’t needs explanation--just look at plethora of lost &
            found emails in your email box. There is a probability that these
            emails might be ignored. We don’t want that to happen, in the Lost
            and Found section, you can upload details of what you've lost, and
            whoever finds it will get in touch. Or if you've found something,
            you can upload its details as well to help out the owner. Just
            remember to add "Treat expected" in the description to make it a
            proper tradeoff :)
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DevelopersNote;
