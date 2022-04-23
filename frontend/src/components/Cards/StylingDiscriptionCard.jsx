
import { styled } from '@mui/system';
export const Wrapper = styled('div')({
  width: '100 %',
  height: '100 %',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '60px',
  marginBottom: '40px',

  "@media(max-width: 1200px)": {
    width: '100 %',
    flexDirection: 'column',
    alignItems: 'center',
  },
  "@media(max-width: 600px)": {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '30px',
    marginBottom: '30px',
  }
});
export const BoxContainer = styled('div')({
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
  },
  "@media (max-width: 480px)": {
    width: '100%',
  }
});
export const TextContainer = styled('div')({
  width: '45%',
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '10px',
  "@media(max-width: 1200px)": {
    width: '80%',
  },
  "@media(max-width: 900px)": {
    width: '90%',
    paddingLeft: '0px',
  },
  "@media(max-width: 600px)": {
    width: '92%',
    paddingLeft: '0px',
  }
});
