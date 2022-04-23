import React from "react";
import { styled } from '@mui/system';

const HorizontalMargin = styled('span')(({ margin }) => ({
  display: 'flex',
  width: typeof margin === "string" ? margin : `${margin}px`,
}));

const VerticalMargin = styled('span')(({ margin }) => ({
  display: 'flex',
  height: typeof margin === "string" ? margin : `${margin}px`,
}));

function Marginer(props) {
  const { direction } = props;

  if (direction === "horizontal") return <HorizontalMargin {...props} />;
  else {
    return <VerticalMargin {...props} />;
  }
}

Marginer.defaultProps = {
  direction: "horizontal",
};

export { Marginer };
