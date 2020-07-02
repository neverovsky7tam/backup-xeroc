import React, { useEffect } from 'react';
import { BoxDecor } from '../Parts/BoxDecor';

const ToggleBlock = React.forwardRef(({ children, style, func }, initialBlock) => {
  const block = React.createRef();

  const onBlockClick = () => {
    block.current.classList.toggle('item-active');
    if (func) func(block.current);
  };

  return (
    <div
      className="toggle-block"
      style={style}
      ref={initialBlock}
      onClick={onBlockClick}>
      <div
        className="toggle-block__inner"
        ref={block}>
        {children}
      </div>
      <BoxDecor />
    </div>
  );
});

export default ToggleBlock;