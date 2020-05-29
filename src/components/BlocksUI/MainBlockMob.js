import React from 'react';
import { BoxDecor } from '../Parts/BoxDecor';

export const MainBlockMob = React.forwardRef(({ icon, header, span, actionIcon, func, style }, ref) => {
  let title = header;
  let text = span;
  if (title.length > 25) text = title.slice(0, 24) + '...';
  if (text.length > 25) text = text.slice(0, 25) + '...';

  return (
    <div className="main-block" style={style}>
      <div className="main-block__inner" ref={ref}>
        <div className="left">
          <div className="icon">{icon}</div>
          <div className="text">
            <h4 className="h4-mob">{title}</h4>
            <span className="span-mob">{text}</span>
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