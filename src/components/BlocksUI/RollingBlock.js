import React from 'react';
import { BoxDecor } from '../Parts/BoxDecor';

export const RollingBlock = React.forwardRef(({ icon, header, span, actionIcon, func }, ref) => {
  return (
    <div className="main-block">
      <div className="main-block__inner" ref={ref}>
        <div className="left">
          <div className="icon">{icon}</div>
          <div className="text">
            <h4 className="h4-mob">{header}</h4>
            <span className="span-mob">{span}</span>
          </div>
        </div>
        <div className="right">
          <div
            className="action-box"
            onClick={func}>
            {actionIcon}
          </div>
        </div>
      </div>
      <BoxDecor />
    </div>
  );
});