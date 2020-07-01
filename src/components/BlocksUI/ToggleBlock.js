import React, { useEffect } from 'react';
import { BoxDecor } from '../Parts/BoxDecor';

const ToggleBlock = ({ children, style, func, isActiveDefault }) => {
  const block = React.createRef();

  const onBlockClick = () => {
    block.current.classList.toggle('item-active');
    if (func) func(block.current);
  };

  useEffect(() => {
    if (isActiveDefault) onBlockClick();
  });

  return (
    <div
      className="toggle-block"
      style={style}
      onClick={onBlockClick}>
      <div
        className="toggle-block__inner"
        ref={block}>
        {children}
      </div>
      <BoxDecor />
    </div>
  );
};

export default ToggleBlock;