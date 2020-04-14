import React from 'react';

export const calcToScroll = (scrollBlock) => {
  const SCROLL_THUMB_HEIGHT = 90;
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

const Scroll = React.forwardRef(({ scrollBlock }, ref) => {
  const scrollLayer = React.createRef();

  const dragThumb = (e) => {
    e.target.addEventListener('selectstart', (evt) => {
      evt.preventDefault();
    });

    const content = scrollBlock.current;
    const layer = scrollLayer.current;
    const thumb = ref.current;
    layer.style.width = '202px';

    const parseTranslateValue = thumb.style.transform.slice(11);
    const currentTranslate = parseFloat(parseTranslateValue);

    const start = e.pageY;
    const getSizes = calcToScroll(content);
    const trackHeight = getSizes.actualScrollTrackHeight;

    const moveThumb = (evt) => {
      evt.target.addEventListener('selectstart', (e) => {
        e.preventDefault();
      });

      let dist = -((start - evt.pageY) - currentTranslate);
      if (dist >= 0 && dist <= trackHeight) {
        thumb.style.transform = `translateY(${dist}px)`;

        const contentPosition = dist * getSizes.scrollStep;
        content.scrollTop = contentPosition;
      }
    }

    const disableMoveThumb = () => {
      layer.removeEventListener('mousemove', moveThumb);
      layer.style.width = '';
    }
    layer.addEventListener('mousemove', moveThumb);
    layer.addEventListener('mouseup', disableMoveThumb);
    document.addEventListener('mouseup', disableMoveThumb);
  }

  return (
    <div
      className="scroll-layer"
      ref={scrollLayer}>
      <div className="scroll-component">
        <div
          className="scroll-thumb"
          ref={ref}
          onMouseDown={dragThumb}
          style={{ transform: 'translateY(0px)' }}>
        </div>
      </div>
    </div>
  )
});

export default Scroll;
