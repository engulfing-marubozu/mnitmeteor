import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Tabs, Tab } from '@mui/material';
import { makeStyles } from '@mui/styles';
export const NavTabs = styled(Tabs)({
    '& .MuiTabs-indicator': {
        backgroundColor: '#512da8',
    },
});

export const NavTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    padding: "0.5rem",
    minWidth: 0,
    fontSize: "11px",
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

export const VerticalNavTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    padding: "0.5rem",
    minWidth: 0,
    // [theme.breakpoints.up('md')]: {
    //     minWidth: 0,
    // },
    fontWeight: theme.typography.fontWeightRegular,
    color: 'rgba(0, 0, 0, 0.85)',
    '&:hover': {
        color: '#673ab7',
        opacity: 1,
    },
    '&.Mui-selected': {
        color: 'black',
        fontWeight: theme.typography.fontWeightMedium,
        backgroundColor: "#d1c4e9",
    },
    '&.Mui-focusVisible': {
        backgroundColor: '#d1eaff',
    },
}));

export const verticalNavigationStyle = makeStyles({
    outerBox: {
        // display:"static",
        margin: "1rem 0rem",
        display: "flex",
        justifyContent: "flex-end",
        "@media (max-width: 600px)": {
            display: "none",
        },
    },
    paperStyle: {
        // display:"flex",
        width: "220px",
        marginRight: "1rem",
        "@media (max-width: 900px)": {
            width: "140px",
        },
        "@media (max-width: 700px)": {
            width: "120px",
        },
    },
    iconLabelWrapper: {
        flexDirection: "row",
    },
})

export const forumContainStyle = makeStyles({
    mainBox: {
        maxWidth: "900px",
        display: "flex",
        padding: "24px 0px 40px 0px ",
        margin: "0rem auto",
        "@media (max-width: 1200px)": {
            padding: "24px 42px 40px 42px",
        },
        "@media (max-width:900px)": {
            padding: "24px 24px 40px 42px",
        },
        "@media (max-width:600px)": {
            margin: "0rem",
            width: "100%",
            padding: "0px 0px 40px 0px",
        }
    },
    verticalNavBox: {
        display: "flex",
        width: "27%",
        "@media (max-width:1200px)": {
            width: "30%",
        },
        "@media (max-width:900px)": {
            width: "0px",
        },
    },
    cardBox: {
        width: "73%",
        display: "flex",
        marginLeft: "auto",
        flexDirection: "column",
        "@media (max-width:1200px)": {
            width: "72%",
        },
        "@media (max-width:900px)": {
            width: "100%",
            marginLeft: "156px"
        },
        "@media (max-width:700px)": {
            width: "100%",
            marginLeft: "136px"
        },
        "@media (max-width:600px)": {
            width: "100%",
            flexDirection: "column",
            marginLeft: "0px"
        }
    },
})