import React, { useState } from 'react';
import FiltersBlock from './FiltersBlock';
import Scroll from '../Scroll/Scroll';
import { calcToScroll } from '../Scroll/Scroll';

const Filters = () => {
  const [isScroll, setScrollDisplay] = useState(false);

  const scrollThumb = React.createRef();
  const scrollBlock = React.createRef();

  const setScroll = () => {
    const scroll = calcToScroll(scrollBlock.current);
    if (scrollThumb.current) {
      scrollThumb.current.style.transform = `translateY(${scroll.toScroll}px)`;
    }
  };

  const checkScroll = (filtersBlockHeight) => {
    const scrollBlockHeight = scrollBlock.current.clientHeight;
    if (filtersBlockHeight > scrollBlockHeight) setScrollDisplay(true);
    else setScrollDisplay(false);
  };

  return (
    <section className="filters home-page">
      <div className="main-header">
        <h2>filters</h2>
      </div>
      <div className="filters__body main-body">
        <div
          className="scroll-container"
          ref={scrollBlock}
          onScroll={setScroll}>
          <FiltersBlock checkScroll={checkScroll} />
        </div>
      </div>
      {isScroll && <Scroll ref={scrollThumb} scrollBlock={scrollBlock} />}
    </section>
  );
};

export default Filters;