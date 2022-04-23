
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { makeStyles } from '@mui/styles';
export const ProfileBoxStyle = makeStyles({
    mainBox: {
        width: "100%",
        margin: "0px auto",
        // display:"flex",
        // justifyContent: "center",
        // "@media (max-width: 1300px)": {
        //     width: "980px"
        // },
        // "@media (max-width: 1000px)": {
        //     width: "780px"
        // },
        // "@media (max-width: 860px)": {
        //     width: "600px"
        // },
        // "@media (max-width: 660px)": {
        //     width: "480px"
        // },
        // "@media (max-width: 480px)": {
        //     width: "100%"
        // },

    },
})

export const ProfileTabs = styled(Tabs)({
    // borderBottom: '1px solid #e8e8e8',
    width: "100%",
    // backgroundColor: "white",
    '& .MuiTabs-indicator': {
        // backgroundColor: '#1890ff',
    },
});

export const ProfileTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    //  padding:"0rem",
    // [theme.breakpoints.up('sm')]: {
    //     minWidth: 0,
    // },
    fontWeight: 'bold',
    // fontWeight: theme.typography.fontWeightMedium,

    fontSize: '1rem',
    // fontWeight: theme.typography.fontWeightRegular,
    // marginRight: theme.spacing(1),
    color: 'rgba(0, 0, 0, 0.85)',
    '&:hover': {
        // color: '#40a9ff',
        opacity: 1,
    },
    '&.Mui-selected': {
        // color: '#1890ff',
        // fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
        backgroundColor: '#d1eaff',
    },
}));