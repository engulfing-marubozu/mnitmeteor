import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Tabs, Tab, Badge } from '@mui/material';
// import Tab from '@mui/material/Tab';
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from 'react';
const AntTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: '#512da8',
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  padding: "0.3rem",
  minWidth: 0,
  [theme.breakpoints.up('md')]: {
    minWidth: 0,
    padding: "0.5rem",
  },
  fontWeight: theme.typography.fontWeightRegular,
  color: 'rgba(0, 0, 0, 0.85)',
  '&:hover': {
    color: '#673ab7',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#512da8',
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

export default function NavbarTabs(props) {
  const Navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    if (location.pathname === "/") { setValue(0) }
    else if (location.pathname === "/Discussions") { setValue(1) }
    else if (location.pathname === "/LostFound") { setValue(2) }
    else {
      setValue(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])
  console.log(props.updateBadge);
  return (

    <AntTabs value={value} onChange={handleChange}>
      <AntTab label={<Badge badgeContent={props.updateBadge} color="error">
        Home
      </Badge>} onClick={() => { Navigate("/") }} />
      {/* <AntTab label="Home" onClick={() => { Navigate("/") }} /> */}
      <AntTab label="Discussions" onClick={() => { Navigate("Discussions") }} />
      <AntTab label="Lost&Found" onClick={() => { Navigate("LostFound") }} />
    </AntTabs>


  );
}