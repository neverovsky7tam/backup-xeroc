import React from 'react';
import { BoxDecor } from '../Parts/BoxDecor';

export const RollingBlock = React.forwardRef(({ id, icon, header, span, actionIcon, hideIcon, toggleBlock, deleteBlock }, { rollingBlock, decor }) => {
  return (
    <div className="rolling-block">
      <div className="main-block">
        <div
          className="main-block__inner"
          data-id={id}
          data-state="0"
          ref={rollingBlock}>
          <div className="rolling-block__shown">
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
                onClick={toggleBlock}>
                {actionIcon}
              </div>
            </div>
          </div>
          <div className="rolling-block__hidden">
            <button
              className="button"
              onClick={deleteBlock}>
              {hideIcon}
            </button>
          </div>
        </div>
      </div>
      <BoxDecor ref={decor} />
    </div>
  );
});