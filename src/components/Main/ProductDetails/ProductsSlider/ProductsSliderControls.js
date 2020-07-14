import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NavBtns from '../Controls/NavBtns';
import { SquareBtn } from '../../../BlocksUI/Buttons/Buttons';
import { ReactComponent as ArrowIcon } from '../../../../assets/img/toggle-arrow.svg';

const ControlsDesctop = ({ itemsWrapper }) => {
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
}

const ControlsMob = ({ items, setItem }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const setNextItem = (param) => {
    let val = null;
    if (param) {
      val = currentIndex - 1;
      if (val < 0) val = items.length - 1;
    }
    else val = currentIndex + 1;
    
    val = val % items.length;
    setCurrentIndex(val);
    setItem([items[val]]);
  };

  return (
    <div className="grid-template-2fr product-slider-mob-controls">
      <SquareBtn icon={<ArrowIcon className="arrow arrow_left" />} func={() => setNextItem('toLeft')} />
      <SquareBtn icon={<ArrowIcon className="arrow arrow_right" />} func={() => setNextItem()} />
    </div>
  );
};

const ProductsSliderControls = ({ itemsWrapper, items, setItem }) => {
  const isMobile = useSelector((state) => state.deviceType);

  if (isMobile) return <ControlsMob items={items} setItem={setItem} />
  else return <ControlsDesctop itemsWrapper={itemsWrapper} />
};

export default ProductsSliderControls;