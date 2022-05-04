import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { noteStyle } from "./linksStyle";
export default function DeveloperNotes() {
  const classes = noteStyle();
  return (
    <Box className={classes.mainBox}>
      <Typography className={classes.heading}>DeveloperNotes</Typography>
      <Typography className={classes.typo}>
        College life is tough. Searching for course books, finding a cycle to
        get you around the large campus (and to lectures on time even when you
        wake up just 10 mins before), or looking for a cooler to get you through
        the unbearable heat are all tedious tasks. All of this while staying on
        a limited budget which is nearly impossible if you wanna buy them brand
        new.
        <br />
        This is where we come in. The idea of the site is to provide a simple,
        intuitive buying and selling platform, connecting the students who'd
        like to sell something to those who'd like to buy something at
        affordable prices. Avoiding wastage of resources and unnecessary
        spendthrift at shops benefits both parties. Not only this, we have
        stitched two more sections into the website, A Discussions Section, and
        a Lost & Found Section.
        <br /> Ever stuck searching for students with similar interests or
        expertise with some particular tech stack for a competition or a
        project? We got you. Check out the Discussion Tab. Just put what you're
        looking for and interested students will be able to contact you. Simple!
        <br />
        Students have an unbelievable ability to lose their belongings. For
        instance, just check out the plethora of lost and found mails spamming
        your institute mail. Not only do most students simply ignore those but
        that may invoke administrative action. But don't worry, we've got your
        back. In the Lost and Found section, you can upload details of what
        you've lost, and whoever finds it will get in touch. Or if you've found
        something, you can upload its details as well to help out the owner.
        Just remember to add "Treat expected" in the description to make it a
        proper tradeoff!
      </Typography>
    </Box>
  );
}
