import React, { useState, useLayoutEffect } from 'react';
import store from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setCarouselMenuPos } from '../../store/actions';
import MenuItems from '../MainMenu/MenuItems';

let touchStart = null;
let currentItemIndex = null;

const CarouselMenu = () => {
  const [pos, setPos] = useState(0);
  const initPosition = store.getState().carouselMenuPos.pos;
  const storeItemIndex = store.getState().carouselMenuPos.itemIndex;
  console.log('start', store.getState().carouselMenuPos);

  const items = React.createRef();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    // console.log('items', items.current.children);
    if (initPosition === 0) {
      const initPos = items.current.children[0].clientWidth / 2;
      // items.current.children[0].classList.add('active');
      dispatch(setCarouselMenuPos(initPos, 0));
      setPos(initPos);
      currentItemIndex = 0;
    } else {
      setPos(initPosition);
      currentItemIndex = storeItemIndex;
      console.log('else', initPosition, currentItemIndex)
    }

    items.current.children[currentItemIndex].classList.add('active');
  }, []);

  let rightBreakpoint = null;
  let leftBreakPoint = null;

  const onTouchStart = (e) => {
    const breakPointDistance = items.current.children[currentItemIndex].clientWidth / 2;
    console.log('breakPointDistance', breakPointDistance);
    touchStart = e.changedTouches[0].clientX;
    rightBreakpoint = -breakPointDistance;
    leftBreakPoint = breakPointDistance
  };

  const onTouchMove = (e) => {

    console.log('point', rightBreakpoint, leftBreakPoint);
    const movePos = e.changedTouches[0].clientX
    const delta = touchStart - movePos;
    console.log('delta', delta);
    if (delta < 0 && currentItemIndex === 0) {
      e.preventDefault();
    } else {
      setPos(initPosition + delta);

      // if (delta >= rightBreakpoint) {
      //   items.current.children[currentItemIndex].classList.remove('active');
      //   currentItemIndex += 1;
      //   items.current.children[currentItemIndex].classList.add('active');
      // }
    }


    // setPos(initPosition + delta);
  };

  return (
    <div
      className="carousel-menu"
      style={{ transform: `translateX(-${pos}px)` }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}>
      <MenuItems ref={items} />
    </div>
  );
};

export default CarouselMenu;