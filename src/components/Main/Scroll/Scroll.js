import React, { useLayoutEffect } from 'react';

export const calcToScroll = (scrollBlock, addParam) => {
  if (scrollBlock) {
    const SCROLL_THUMB_HEIGHT = 90;
    const elem = scrollBlock;

    const actualScrollHeight = elem.scrollHeight - elem.offsetHeight;
    let actualScrollTrackHeight = null;
    if (addParam) actualScrollTrackHeight = elem.offsetHeight - SCROLL_THUMB_HEIGHT - addParam;
    else actualScrollTrackHeight = elem.offsetHeight - SCROLL_THUMB_HEIGHT;

    const scrollStep = actualScrollHeight / actualScrollTrackHeight;
    const toScroll = elem.scrollTop / scrollStep;

    return {
      actualScrollHeight,
      actualScrollTrackHeight,
      scrollStep,
      toScroll,
    };
  }
}

const Scroll = React.forwardRef(({ scrollBlock }, scrollThumb) => {
  const scrollLayer = React.createRef();

  useLayoutEffect(() => {
    if (scrollBlock.current) {
      if (scrollBlock.current.scrollHeight === scrollBlock.current.offsetHeight) scrollThumb.current.style.transform = `translateY(0)`;
    };
  });

  const dragThumb = (e) => {
    e.target.addEventListener('selectstart', (evt) => {
      evt.preventDefault();
    });

    if (scrollBlock.current) {
      const content = scrollBlock.current;
      const layer = scrollLayer.current;
      const thumb = scrollThumb.current;
      layer.style.width = '502px';
      layer.style.zIndex = '1111';

      const parseTranslateValue = thumb.style.transform.slice(11);
      const currentTranslate = parseFloat(parseTranslateValue);

      const start = e.pageY;
      const getSizes = calcToScroll(content);
      const trackHeight = getSizes.actualScrollTrackHeight;

      if (content.scrollHeight !== content.offsetHeight) {
        const moveThumb = (evt) => {
          evt.target.addEventListener('selectstart', (e) => {
            e.preventDefault();
          });

          let dist = -((start - evt.pageY) - currentTranslate);
          if (dist >= 0 && dist <= trackHeight) {
            thumb.style.transform = `translateY(${dist}px)`;

            const contentPosition = dist * getSizes.scrollStep;
            content.scrollTop = contentPosition;
          };
        };

        const disableMoveThumb = () => {
          layer.removeEventListener('mousemove', moveThumb);
          layer.style = '';
        };

        layer.addEventListener('mousemove', moveThumb);
        layer.addEventListener('mouseup', disableMoveThumb);
        document.addEventListener('mouseup', disableMoveThumb);
      }
    }
  }

  const clear = () => {
    scrollLayer.current.style = '';
  }

  return (
    <div
      className="scroll-layer"
      ref={scrollLayer}
      onMouseLeave={clear}
      onMouseUp={clear}>
      <div className="scroll-component">
        <div
          className="scroll-thumb"
          ref={scrollThumb}
          onMouseDown={dragThumb}
          style={{ transform: 'translateY(0px)' }}>
        </div>
      </div>
    </div>
  )
});

export default Scroll;
