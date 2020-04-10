import React from 'react';

export const calcToScroll = (scrollBlock) => {
  const SCROLL_THUMB_HEIGHT = 120;

  const elem = scrollBlock.current;
  // console.log('scrollHeight', elem.scrollHeight);
  // console.log('offsetHeight', elem.offsetHeight);
  const actualScrollHeight = elem.scrollHeight - elem.offsetHeight;
  // console.log('actualScrollHeight', actualScrollHeight);

  const actualScrollTrackHeight = elem.offsetHeight - SCROLL_THUMB_HEIGHT;
  // console.log('actualScrollTrackHeight', actualScrollTrackHeight);

  const scrollStep = actualScrollHeight / actualScrollTrackHeight;

  // console.log('elem.scrollTop', elem.scrollTop, scrollStep);
  const toScroll = elem.scrollTop / scrollStep;
  // console.log('toScroll', toScroll);
  return toScroll;
}

const Scroll = ({ top }) => {
  return (
    <div className="scroll-component">
      <div className="scroll-thumb" style={{ transform: `translateY(${top}px)` }}></div>
    </div>
  )
}

export default Scroll;