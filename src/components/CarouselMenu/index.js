import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

let initPosition = null;
let touchStart = null;
let touchStartY = null;
let currentItemIndex = null;
let rightBreakpoint = null;
let leftBreakpoint = null;
let stopPos = null;
let scrolledToLeft = null;
let isMove = false;
let lang = null;
let link = null;

const CarouselMenu = ({ Content }) => {
  const history = useHistory();
  const [pos, setPos] = useState(0);

  const items = React.createRef();
  // if a language was changed
  const currentLang = useSelector((state) => state.langObj.lang);
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

  const setInitPosition = () => {
    const currentLocation = history.location.pathname;
    const elements = Array.from(items.current.children);

    elements.forEach((el, idx) => {
      if (el.dataset.link === currentLocation) currentItemIndex = idx;
    });
    if (currentItemIndex === null) currentItemIndex = 0;

    let prevItemsLength = 0;
    let index = currentItemIndex;
    while (index > 0) {
      index -= 1;
      prevItemsLength += items.current.children[index].clientWidth;
      items.current.children[currentItemIndex].classList.remove('active');
    };
    scrolledToLeft = prevItemsLength;

    initPosition = (items.current.children[currentItemIndex].clientWidth / 2) + prevItemsLength;
    stopPos = initPosition;

    setPos(initPosition);
    items.current.children[currentItemIndex].classList.add('active');
  }

  useEffect(() => {
    setInitPosition();

    return () => {
      initPosition = null;
      touchStart = null;
      touchStartY = null;
      currentItemIndex = null;
      rightBreakpoint = null;
      leftBreakpoint = null;
      stopPos = null;
      scrolledToLeft = null;
      isMove = false;
      lang = null;
    };
  }, [Content]);

  const { pathname } = useLocation();
  useEffect(() => {
    const currentItemPath = items.current.children[currentItemIndex].dataset.link;
    if (pathname !== currentItemPath) setInitPosition();
  }, [pathname]);

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
    if (Math.abs(deltaY) > 40) return;

    const movePos = e.changedTouches[0].clientX
    const delta = touchStart - movePos;
    setPos(initPosition + delta);

    if (delta >= rightBreakpoint) {
      isMove = true;
      Scroll('to-left');
    };

    if (delta < leftBreakpoint) {
      isMove = true;
      Scroll('to-right');
    };
  };

  const onTouchEnd = (e) => {
    if (isMove) {
      isMove = false;
      link = items.current.children[currentItemIndex].dataset.link;
      setTimeout(() => {
        history.push(link);
      }, 100)
    } else {
      if (e) {
        const screenMedian = document.documentElement.clientWidth / 2;
        const touch = e.changedTouches[0].clientX;
        const currentItemRightLocation = screenMedian + rightBreakpoint;
        const currentItemLeftLocation = screenMedian + leftBreakpoint;
        if (touch > currentItemRightLocation) Scroll('to-left');
        if (touch < currentItemLeftLocation) Scroll('to-right');
      } else return;
    }

    initPosition = stopPos;
    setPos(stopPos);
  };

  const Scroll = (side) => {
    if (side === 'to-left') {
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
    } else {
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

  return (
    <div
      className="carousel-menu"
      style={{ transform: `translateX(-${pos}px)` }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}>
      <Content ref={items} />
    </div>
  );
};

export default CarouselMenu;