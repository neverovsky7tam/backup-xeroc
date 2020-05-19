import React, { useState, useLayoutEffect } from 'react';
import store from '../../store/store';
import { useDispatch } from 'react-redux';
import { setCarouselMenuPos } from '../../store/actions';
import MenuItems from '../MainMenu/MenuItems';

let initPosition = null;
let touchStart = null;
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
      currentItemIndex = 0;
      stopPos = initPos;
      initPosition = initPos;
    } else {
      currentItemIndex = storeItemIndex;
      stopPos = storePosition;
      initPosition = storePosition;
    }
    setPos(initPosition);
    items.current.children[currentItemIndex].classList.add('active');

    return () => {
      dispatch(setCarouselMenuPos(initPosition, currentItemIndexnpm ));
    }
  }, []);

  const onTouchStart = (e) => {
    const breakPointDistance = items.current.children[currentItemIndex].clientWidth / 2;
    touchStart = e.changedTouches[0].clientX;
    rightBreakpoint = breakPointDistance;
    leftBreakpoint = -breakPointDistance
  };

  const onTouchMove = (e) => {
    const movePos = e.changedTouches[0].clientX
    const delta = touchStart - movePos;

    if ((delta < 0 && currentItemIndex === 0) || (delta > 0 && currentItemIndex === items.current.children.length - 1)) {
      return;
    } else {
      setPos(initPosition + delta);

      if (delta >= rightBreakpoint) {
        const prevItemWidth = items.current.children[currentItemIndex].clientWidth;
        scrolledToLeft = scrolledToLeft + prevItemWidth;
        items.current.children[currentItemIndex].classList.remove('active');

        currentItemIndex += 1;
        if (currentItemIndex > items.current.children.length - 1) {
          currentItemIndex = items.current.children.length - 1;
          return;
        } else {
          const nextItemWidth = items.current.children[currentItemIndex].clientWidth;
          items.current.children[currentItemIndex].classList.add('active');
          stopPos = scrolledToLeft + (nextItemWidth / 2);
          rightBreakpoint = rightBreakpoint + nextItemWidth;
        }
      }

      if (delta <= leftBreakpoint) {
        items.current.children[currentItemIndex].classList.remove('active');

        currentItemIndex -= 1;
        if (currentItemIndex < 0) {
          currentItemIndex = 0;
          return;
        } else {
          const nextItemWidth = items.current.children[currentItemIndex].clientWidth;
          items.current.children[currentItemIndex].classList.add('active');
          stopPos = scrolledToLeft - (nextItemWidth / 2)
          leftBreakpoint = leftBreakpoint - nextItemWidth;
          scrolledToLeft = scrolledToLeft - nextItemWidth;
        }
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