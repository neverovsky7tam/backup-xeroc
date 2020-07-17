import React from 'react';
import { BoxDecor } from 'components/Parts/BoxDecor';

const Container = ({ children, style, innerStyle }) => {
  return (
    <div className="container" style={style}>
      <div className="container__inner" style={innerStyle}>
        {children}
      </div>
      <BoxDecor />
    </div>
  );
};

export default Container;