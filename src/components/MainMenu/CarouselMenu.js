import React, { useState, useLayoutEffect } from 'react';
import store from '../../store/store';
import { useDispatch } from 'react-redux';
import { setCarouselMenuPos } from '../../store/actions';
import MenuItems from '../MainMenu/MenuItems';

let initPosition = null;
let touchStart = null;
let touchStartY = null;
let currentItemIndex = null;
let rightBreakpoint = null;
let leftBreakpoint = null;
let stopPos = null;
let scrolledToLeft = null;

const CarouselMenu = () => {
  const [pos, setPos] = useState(0);
  const storePosition = store.getState().carouselMenuPos.pos;
  const storeItemIndex = store.getState().carouselMenuPos.itemIndex;

  const items = React.createRef();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (storePosition === 0) {
      const initPos = items.current.children[0].clientWidth / 2;
      // console.log('start', initPos);
      currentItemIndex = 0;
      stopPos = initPos;
      initPosition = initPos;
    } else {
      currentItemIndex = storeItemIndex;
      stopPos = storePosition;
      initPosition = storePosition;
    }
    // console.log('initPosition', initPosition);
    setPos(initPosition);
    items.current.children[currentItemIndex].classList.add('active');

    return () => {
      dispatch(setCarouselMenuPos(initPosition, currentItemIndex));
    }
  }, []);

  const onTouchStart = (e) => {
    const breakPointDistance = items.current.children[currentItemIndex].clientWidth / 2;
    touchStart = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
    rightBreakpoint = breakPointDistance;
    leftBreakpoint = -breakPointDistance
  };

  const onTouchMove = (e) => {
    const moveY = e.changedTouches[0].clientY;
    const deltaY = touchStartY - moveY;
    if (Math.abs(deltaY) > 65) {
      onTouchEnd();
      return;
    }

    const movePos = e.changedTouches[0].clientX
    const delta = touchStart - movePos;

    setPos(initPosition + delta);

    if (delta >= rightBreakpoint) {
      if (currentItemIndex < items.current.children.length - 1) {
        const prevItemWidth = items.current.children[currentItemIndex].clientWidth;
        scrolledToLeft = scrolledToLeft + prevItemWidth;
        items.current.children[currentItemIndex].classList.remove('active');

        currentItemIndex += 1;
        const nextItemWidth = items.current.children[currentItemIndex].clientWidth;
        items.current.children[currentItemIndex].classList.add('active');
        stopPos = scrolledToLeft + (nextItemWidth / 2);
        leftBreakpoint = rightBreakpoint;
        rightBreakpoint = rightBreakpoint + nextItemWidth;
      }
    }

    if (delta < leftBreakpoint) {
      if (currentItemIndex !== 0) {
        items.current.children[currentItemIndex].classList.remove('active');

        currentItemIndex -= 1;
        const nextItemWidth = items.current.children[currentItemIndex].clientWidth;
        items.current.children[currentItemIndex].classList.add('active');
        stopPos = scrolledToLeft - (nextItemWidth / 2);
        rightBreakpoint = leftBreakpoint;
        leftBreakpoint = leftBreakpoint - nextItemWidth;
        scrolledToLeft = scrolledToLeft - nextItemWidth;
      }
    }
  };

  const onTouchEnd = () => {
    setPos(stopPos);
    initPosition = stopPos;
  }

  return (
    <div
      className="carousel-menu"
      style={{ transform: `translateX(-${pos}px)` }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}>
      <MenuItems ref={items} />
    </div>
  );
};

export default CarouselMenu;