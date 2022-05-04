import { styled } from "@mui/system";
import { makeStyles } from "@mui/styles";
export const AdminInput = styled("input")({
  width: "260px",
  height: "42px",
  outline: "none",
  border: "1px solid rgba(200, 200, 200, 0.3)",
  padding: "0px 10px",
  borderBottom: "1.4px solid transparent",
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
    borderBottom: "3px solid rgb(91, 45, 163)",
  },
});
export const CodeValidator = styled("label")({
  color: "red",
  fontSize: "14px",
  marginTop: "10px",
});
export const AdminLoginStyle = makeStyles({
  mainBox: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#212121",
    position: "relative",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  actionBox: {
    position: "absolute",
    right: "10px",
    top: "10px",
  },
  closeIcon: {
    color: "white",
  },
});

export function UnicodeValidator(value) {
  const error = {};
  if (!value) {
    error.code = "Code is required ";
  } else if (value.length < 8) {
    error.code = "Code length must be atleast 8 characters";
  } else if (value.length > 28) {
    error.code = "Code length must not exceed 20 characters";
  }
  return error;
}
