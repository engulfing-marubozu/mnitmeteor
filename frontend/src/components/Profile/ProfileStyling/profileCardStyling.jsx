import { makeStyles } from "@mui/styles";
import { CardContent, styled } from "@mui/material";
export const ProfileCardStyle = makeStyles({
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
    flexDirection: "column",
  },
  actionBox: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    padding: "0px",
    fontSize: "14px",
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
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "0",
  },
  iconButton: {
    color: "#512da8",
    padding: "0.25rem",
    marginRight: "0.3rem",
  },
  Icon: {
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
`)