
import { styled } from '@mui/system';
export const BoxContainer = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '35px',
});

export const FormContainer = styled('form')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const MutedLink = styled('a')({
  fontSize: '11px',
  color: 'rgba(200, 200, 200, 0.8)',
  fontWeight: 500,
  textDecoration: 'none',
  textAlign: 'center',
  "&:hover": {
    cursor: 'pointer',
  }
});

export const MutedText = styled('p')({
  fontSize: '14px',
  color: 'rgba(91, 84, 84, 100)',
  fontWeight: 540,
  textDecoration: 'none',
});
export const ColoredEmail = styled('p')({
  fontSize: '12px',
  color: '#5b2da3',
  fontWeight: 500,
  textDecoration: 'none',
  marginTop: 0,
});
export const BoldLink = styled('a')({
  fontSize: '11px',
  color: '#5b2da3',
  fontWeight: 500,
  textDecoration: 'none',
  margin: '0px 4px',
  "&:hover": {
    cursor: 'pointer',
  }
});

export const Input = styled('input')({
  width: '100 %',
  height: '42px',
  outline: 'none',
  border: '1px solid rgba(200, 200, 200, 0.3)',
  padding: '0px 10px',
  borderBottom: '1.4px solid transparent',
  transition: 'all 200ms ease -in -out',
  fontSize: '12px',
  boxShadow: '0px 0px 2.5px rgba(15, 15, 15, 0.19)',

  "&::placeholder": {
    color: 'rgba(200, 200, 200, 1)',
  },

  "&: not(: last - of - type)": {
    borderBottom: '1.5px solid rgba(200, 200, 200, 0.4)',
  },

  "&:focus": {
    outline: 'none',
    borderBottom: '2px solid rgb(91, 45, 163)',
  }
});

export const SubmitButton = styled('button')({
  width: '100%',
  padding: '10px 20%',
  color: '#fff',
  fontSize: '15px',
  fontWeight: 600,
  border: 'none',
  borderRadius: '100px 100px 100px 100px',
  cursor: 'pointer',
  transition: 'all, 240ms ease-in-out',
  // background: 'rgb(2, 0, 36)',
  background: 'linear-gradient(90deg,rgba(2, 0, 36, 1) 0%, rgba(91, 45, 163, 1) 0%, rgba(101, 60, 165, 0.8802871490393032) 97%)',
  "&:hover": {
    filter: 'brightness(1.08)',
  }
});

export const Passwordlabel = styled('label')({
  padding: '10px 0px',
  color: 'rgba(91, 84, 84, 100)',
  fontSize: '12px',
});

export const Validationlabel = styled('label')({
  padding: '5px 0px',
  fontSize: '10px',
  color: '#ff0000',
});
export const Dogeimg = styled('img')({
  width: '200px',
  height: '200px',
})
export const MarginTopBox = styled('div')({
  marginTop: '3.5rem',
})