import React from 'react';
import { BoxDecor } from '../Parts/BoxDecor';

const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="container__inner">
        {children}
      </div>
      <BoxDecor />
    </div>
  );
};

export default Container;