import React, { useEffect } from 'react';
import NavBtns from '../Controls/NavBtns';

const ProductsSliderControls = ({ itemsWrapper }) => {
  const ITEM_WIDTH = 243;
  const ITEM_MARGIN_RIGHT = 30;
  let position = null;
  let startPosToRight = null;
  let startPosToLeft = null;
  let triggerLengthVal = null;

  const scrollItems = (param) => {
    const carriage = itemsWrapper.current;

    if (param) {
      position -= ITEM_WIDTH;
      if (Math.abs(position) >= triggerLengthVal) position = startPosToRight;
    } else {
      position += ITEM_WIDTH;
      if (position === 0) position = startPosToLeft;
    };
    carriage.style.transform = `translateX(${position}px)`;
  };

  useEffect(() => {
    const carriageWidth = itemsWrapper.current.scrollWidth;
    const parentWidth = itemsWrapper.current.parentNode.clientWidth;
    const halfCarriageWidth = (carriageWidth + ITEM_MARGIN_RIGHT) / 2;
    const shiftPos = Math.ceil(parentWidth / ITEM_WIDTH) * ITEM_WIDTH;

    triggerLengthVal = carriageWidth - shiftPos;
    startPosToRight = -(halfCarriageWidth - shiftPos);
    startPosToLeft = -(halfCarriageWidth + shiftPos);
    position = startPosToRight;
    
    itemsWrapper.current.style.transform = `translateX(${position}px)`;
  });

  return (
    <div className="pdp-controls">
      <NavBtns func={scrollItems} />
    </div>
  );
};

export default ProductsSliderControls;