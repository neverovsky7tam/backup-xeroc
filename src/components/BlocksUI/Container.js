import React from 'react';
import { BoxDecor } from '../Parts/BoxDecor';

const Container = ({ children, style }) => {
  return (
    <div className="container" style={style}>
      <div className="container__inner">
        {children}
      </div>
      <BoxDecor />
    </div>
  );
};

export default Container;