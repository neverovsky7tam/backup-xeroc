import React from 'react';
import ActionPlace from './ActionPlace';
import { BoxDecor } from 'components/Parts/BoxDecor';

const TitleBlock = ({ text, icon, func, style }) => {
  return (
    <div
      className="title-block main-font"
      style={style}>
      <div className="title-block__inner">
        <span>{text}</span>
        {
          icon &&
          <ActionPlace icon={icon} func={func} />
        }
      </div>
      <BoxDecor />
    </div>
  );
};

export default TitleBlock;