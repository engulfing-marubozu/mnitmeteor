import { styled } from '@mui/system';
import { motion } from "framer-motion";
export const BoxContainer = styled('div')({
  width: '350px',
  minHeight: '550px',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '19px',
  backgroundColor: '#fff',
  boxShadow: '0 0 2px rgba(15, 15, 15, 0.28)',
  position: 'relative',
  overflow: 'hidden',
  '@media (max-width: 400px)': {
    width: '330px',
    minHeight: '530px',
  }
});

export const TopContainer = styled('div')({
  width: '100 %',
  height: '250px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '0 1.8em',
  paddingBottom: '5em',
});

export const BackDrop = styled(motion.div)({
  width: '100%',
  height: '550px',
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '50%',
  transform: 'rotate(5deg)',
  top: '-300px',
  left: '-90px',
  background: 'linear-gradient(90deg,rgba(2, 0, 36, 1) 0%,rgba(91, 45, 163, 1) 0%,rgba(101, 60, 165, 0.8802871490393032) 97%)',
});
export const HeaderContainer = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
})

export const HeaderText = styled('h2')({
  fontSize: '30px',
  fontWeight: 600,
  lineHeight: 1.24,
  color: '#fff',
  zIndex: 10,
  margin: 0,
});

export const SmallText = styled('h5')({
  color: '#fff',
  fontWeight: 500,
  fontSize: '11px',
  zIndex: 10,
  margin: 0,
  marginTop: '7px',
});

export const InnerContainer = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '0 1.8em',
});