import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        p: 1,
        borderRadius: 1,
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function DiscriptionCard() {
  return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{
          display: 'grid',
          gridAutoFlow: 'row',
          gridTemplateColumns: 'repeat(14, 1fr)',
          gridTemplateRows: 'repeat)',
          gap: 2,
        }}
      >
        <Item sx={{ gridColumn: '3/9', gridRow: '2 / 8' ,bgcolor:'#512da8'}}>1</Item>
        <Item sx={{ gridColumn: '3/9' , gridRow:'8/10'}}>3</Item>
        <Item sx={{ gridColumn: '9/13', gridRow: '2/ 10' }}>5</Item>
      </Box>
    </div>
  );
}
