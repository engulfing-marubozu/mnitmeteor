import { makeStyles } from "@mui/styles";
import { CardContent, styled, Card } from "@mui/material";
export const CardStyleFirst = makeStyles({
  image: {
    width: "100%",
    objectFit: "contain",
  },
  card: {
    maxWidth: "280px",
    borderRadius: "4px",
  },
  cardMedia: {
    height: "180px",
    maxWidth: "280px",
    padding: "12px",
    "@media(max-width:600px)": {
      height: "160px",
      padding: "8px",
    },
  },
  cardContent: {
    backgroundColor: "#f5f5f5",
    padding: "0 8px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sizeBox: {
    width: "85%",
  },
  sizeSecBox: {
    width: "65%",
  },
  title: {
    padding: "0px",
    fontSize: "16px",
    fontWeight: "bold",
    "@media(max-width:600px)": {
      fontSize: "12px",
    },
  },
  date: {
    fontSize: "12px",
    "@media(max-width:600px)": {
      fontSize: "10px",
    },
  },
  cardActions: {
    flexDirection: "row",
    alignItems: "center",
    padding: "0",
  },
  iconButton: {
    padding: "0.25rem",
    color: "#512da8",
  },
  Icon: {
    fontSize: "24px",
    "@media(max-width:600px)": {
      fontSize: "18px",
    },
  },
});

export const CardStyleSecond = makeStyles({
  zMainBox: {
    maxWidth: "280px",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  zaction: {
    zIndex: 11,
    position: "absolute",
    right: "0px",
  },
  hoverCard: {
    maxwidth: "280px",
    borderRadius: "4px",
    transition: `500ms transform ease`,
  },
  crossIconButton: {
    color: "black",
    backgroundColor: "white",
    padding: "0.25rem",
    margin: "0.3rem",
    "&:hover": {
      backgroundColor: "white",
    },
  },
  crossIcon: {
    fontSize: "20px",
    "@media(max-width:600px)": {
      fontSize: "16px",
    },
  },
});
export const CardContentNoPadding = styled(CardContent)(`
  &:last-child {
    padding-bottom: 6px;
  }
`);

export const HoverCard = styled(Card)(`
&:hover{
  transform:scale(1.12);
  box-shadow: 0px 5px 6px -3px rgb(0 0 0 / 15%), 0px 9px 12px 1px rgb(0 0 0 / 14%), 0px 3px 16px 2px rgb(0 0 0 / 14%);
   @media (max-width: 600px) 
   {
   transform:scale(1.06);}
  @media (max-width: 502px) 
  {
    transform:scale(1.04);
  }  
}
`);
