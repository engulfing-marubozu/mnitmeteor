
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { makeStyles } from '@mui/styles';
export const ProfileBoxStyle = makeStyles({
    mainBox: {
        width: "100%",
        display: "flex",
        justifyContent: "center",

    },
    titleHolder: {
        width:"100%",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "center",
    },
    heading: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#5e35b1",
        padding:"1rem 4rem"
    }
})

export const ProfileTabs = styled(Tabs)({
    // borderBottom: '1px solid #e8e8e8',
    paddingLeft: "6rem",
    width: "100%",
    backgroundColor: "white",
    '& .MuiTabs-indicator': {
        // backgroundColor: '#1890ff',
    },
});

export const ProfileTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
    textTransform: 'none',
    //  padding:"rem",
    // [theme.breakpoints.up('sm')]: {
    //     minWidth: 0,
    // },
    // fontWeight: 'bold',
        fontWeight: theme.typography.fontWeightMedium,

    fontSize: '1.3rem',
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