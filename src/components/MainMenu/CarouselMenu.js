import React, { useState, useLayoutEffect, useEffect } from 'react';
import store from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
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
let lang = null;

const CarouselMenu = () => {
  const [pos, setPos] = useState(0);

  const items = React.createRef();
  const dispatch = useDispatch();

  const storePosition = store.getState().carouselMenuPos.pos;
  const storeItemIndex = store.getState().carouselMenuPos.itemIndex;
  const currentLang = useSelector((state) => state.langObj.lang);

  // if a language was changed
  useEffect(() => {
    if (lang) {
      let initPos = items.current.children[currentItemIndex].clientWidth / 2;
      scrolledToLeft = 0;

      let i = 0;
      while (i < currentItemIndex) {
        const width = items.current.children[i].clientWidth;
        initPos += width;
        scrolledToLeft += width;
        i += 1;
      }
      setPos(initPos);
    };

    lang = currentLang;
  }, [currentLang]);

  useLayoutEffect(() => {
    if (storePosition === null) {
      currentItemIndex = 0;
      initPosition = items.current.children[0].clientWidth / 2;
      stopPos = initPosition;
    } else {
      currentItemIndex = storeItemIndex;
      stopPos = storePosition;
      initPosition = storePosition;
    }

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
    };

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
      <MenuItems ref={items} mobile={true} />
    </div>
  );
};

export default CarouselMenu;