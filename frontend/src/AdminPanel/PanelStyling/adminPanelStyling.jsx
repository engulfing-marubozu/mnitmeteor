
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';
import { Button } from "@mui/material";
export const AdminCardStyle = makeStyles({
  container: {
    margin: "2rem 0rem",
    display: "flex",
    justifyContent: "center",
  },
  lfCategory: {
    fontSize: "16px",
    fontWeight: "bold",
    color: (props) => props.category === "Found" ? "#00c853" : "#d32f2f",
  },
  sellCategoryBox: {
    display: "flex",
    flexDirection: "row",
  },
  sellCatText: {
    marginLeft: "4px",
    marginRight: "1rem",
    color: "#ff5722",
    fontWeight: "bold",
  },
  pdfContainer: {
    width: "140px",
    display: "flex",
    flexDirection: "row",
    margin: "8px 0px",
    alignItems: "center",
    border: "1px solid  #e0e0e0",
    borderRadius: "4px",
    padding: '2px',
    textDecoration: "none"
  },
  fileName: {
    width: "120px",
    padding: "0px 2px 3px "
  }
})

export const PanelButton = styled(Button)(() => ({
  lineHeight: 1.5,
  textTransform: 'none',
  fontSize: "14px",
  fontWeight: "bold",
}));



export const AdminWrapper = styled('div')({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifContent: 'center',
  marginBottom: '10px',

  "@media (max-width: 1200px)": {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  "@media (max-width: 600px)": {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  }
});
export const AdminBoxContainer = styled('div')({
  width: '45%',
  display: 'flex',
  "@media (max-width: 1200px)": {
    width: '80%',
  },
  "@media (max-width: 900px)": {
    width: '90%',
  },
  "@media (max-width: 600px)": {
    width: '92%',
  }
})
export const AdminTextContainer = styled('div')({
  width: '45%',
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '10px',
  "@media (max-width: 1200px)": {
    width: '80%',
  },
  "@media (max-width: 900px)": {
    width: '90%',
    paddingLeft: '0px',
  },
  "@media (max-width: 600px)": {
    width: '92%',
    paddingLeft: '0px',
  }
});