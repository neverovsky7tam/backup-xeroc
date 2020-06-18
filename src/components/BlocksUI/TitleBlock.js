import React from 'react';
import { BoxDecor } from '../Parts/BoxDecor';

const TitleBlock = ({ text, icon, func }) => {
  return (
    <div className="title-block main-font">
      <div className="title-block__inner">
        <span>{text}</span>
        {
          icon &&
          <div
            className="action-place"
            onClick={func}>
            <div className="icon-holder">{icon}</div>
          </div>
        }
      </div>
      <BoxDecor />
    </div>
  );
};

export default TitleBlock;