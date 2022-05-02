import { styled } from '@mui/material/styles';
export const FormContainer = styled("form")({
  padding: "10px 5px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
export const MutedText = styled("p")({
  fontSize: "11px",
  marginRight: "7rem",
  color: "rgba(91, 84, 84, 100)",
  fontWeight: 540,
  textDecoration: "none",
  "@media (max-width: 600px)": {
    marginRight: 0,
  },
});
export const Input = styled("input")({
  width: "220px",
  height: "42px",
  outline: "none",
  border: "1px solid rgba(200, 200, 200, 0.3)",
  padding: "0px 10px",
  borderBottom: "1.4px solid transparent",
  borderRadius: "3px",
  transition: "all 200ms ease -in -out",
  fontSize: "12px",
  boxShadow: "0px 0px 2.5px rgba(15, 15, 15, 0.19)",

  "&::placeholder": {
    color: "rgba(200, 200, 200, 1)",
  },

  "&: not(: last - of - type)": {
    borderBottom: "1.5px solid rgba(200, 200, 200, 0.4)",
  },

  "&:focus": {
    outline: "none",
    borderBottom: "2px solid rgb(91, 45, 163)",
  },
  "@media(max-width:900px)": {
    width: "190px",
  },
  "@media(max-width:600px)": {
    width: "240px",
  },
});

export const CustomizeButton = styled("button")({
  padding: "10px 18px",
  color: "#fff",
  fontSize: "14px",
  fontWeight: 600,
  border: "none",
  borderRadius: "100px 100px 100px 100px",
  cursor: "pointer",
  transition: "all, 240ms ease-in-out",
  background:
    "linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(91, 45, 163, 1) 0%, rgba(101, 60, 165, 0.8802871490393032) 97%)",
  "&:hover": {
    filter: "brightness(1.08)",
  },
  "@media(max-width:900px)": {
    padding: "10px 16px",
    fontSize:"12px"
  }
});
export const Validationlabel = styled("label")({
  padding: "2px 0px",
  fontSize: "10px",
  color: "#ff0000",
});
