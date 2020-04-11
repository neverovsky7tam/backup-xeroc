import React from 'react';

export const calcToScroll = (scrollBlock) => {
  const SCROLL_THUMB_HEIGHT = 120;
  const elem = scrollBlock;

  const actualScrollHeight = elem.scrollHeight - elem.offsetHeight;
  const actualScrollTrackHeight = elem.offsetHeight - SCROLL_THUMB_HEIGHT;

  const scrollStep = actualScrollHeight / actualScrollTrackHeight;
  const toScroll = elem.scrollTop / scrollStep;

  return {
    actualScrollHeight,
    actualScrollTrackHeight,
    scrollStep,
    toScroll,
  };
}

const Scroll = React.forwardRef(({scrollBlock}, ref) => {

  const dragThumb = (e) => {
    console.log('e', e.target);
    const start = e.pageY;
    const getSizes = calcToScroll(scrollBlock.current);
    console.log('getSizes', getSizes);

    e.target.addEventListener('mousemove', (evt) => {
      console.log('move', evt.pageY);
      let dist = (start - evt.pageY) - 23;
      console.log('dist', dist);
      ref.current.style.transform = `translateY(${-dist}px)`;
    })
    // const style = getComputedStyle(e.target).transform;
    // console.log('e', getComputedStyle(e.target), style);
  }

  return (
    <div className="scroll-component">
      <div
        className="scroll-thumb"
        ref={ref}
        onMouseDown={dragThumb}
        style={{ transform: 'translateY(23px)' }}>
      </div>
    </div>
  )
});

export default Scroll;
