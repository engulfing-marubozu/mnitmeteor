import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Badge from "@mui/material/Badge";
import { useNavigate, useLocation } from "react-router-dom";

import { useEffect } from "react";
const AntTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#512da8",
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    padding: "0.65rem",
    minWidth: 0,
    fontWeight: theme.typography.fontWeightRegular,
    color: "rgba(0, 0, 0, 0.85)",
    "&:hover": {
      color: "#673ab7",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#512da8",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);

export default function NavbarTabs({ updateBadge, setPostPending }) {
  const Navigate = useNavigate();
  const location = useLocation();
  const [value, setValue] = React.useState(0);
  useEffect(() => {
    if (location.pathname === "/") {
      setValue(0);
    } else if (location.pathname.includes("/discussions")) {
      setValue(1);
    } else if (location.pathname.includes("/lost&found")) {
      setValue(2);
    } else {
      setValue(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
  return (
    <AntTabs value={value}>
      <AntTab
        label={
          <Badge badgeContent={updateBadge} color="error">
            Home
          </Badge>
        }
        onClick={() => {
          Navigate("/");
          setPostPending(0);
        }}
      />
      <AntTab
        label="Community"
        onClick={() => {
          Navigate("discussions");
        }}
      />
      <AntTab
        label="Lost & Found"
        onClick={() => {
          Navigate("lost&found");
        }}
      />
    </AntTabs>
  );
}
