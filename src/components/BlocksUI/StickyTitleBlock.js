import React from 'react';
import ActionPlace from './ActionPlace';
import { BoxDecor } from 'components/Parts/BoxDecor';

const StickyTitleBlock = ({ text, icon, func, styleWrap }) => {
  return (
    <div
      className="sticky-title-block"
      style={styleWrap}>
      <div className="title-block main-font">
        <div className="title-block__inner">
          <h4>{text}</h4>
          {
            icon &&
            <ActionPlace icon={icon} func={func} />
          }
        </div>
        <BoxDecor />
      </div>
    </div>
  );
};

export default StickyTitleBlock;