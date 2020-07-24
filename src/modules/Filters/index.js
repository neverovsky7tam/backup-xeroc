import React from 'react';
import FiltersBlock from './FiltersBlock';
import Scroll, { calcToScroll } from 'components/Scroll';

const Filters = () => {
  const scrollThumb = React.createRef();
  const scrollBlock = React.createRef();

  const setScroll = () => {
    const scroll = calcToScroll(scrollBlock.current);
    if (scrollThumb.current) {
      scrollThumb.current.style.transform = `translateY(${scroll.toScroll}px)`;
    }
  };

  return (
    <section className="filters p-relative">
      <div className="main-header">
        <h2>filters</h2>
      </div>
      <div className="filters__body main-body">
        <div
          className="scroll-container"
          ref={scrollBlock}
          onScroll={setScroll}>
          <FiltersBlock scrollBlock={scrollBlock} scrollThumb={scrollThumb} />
        </div>
      </div>
      <Scroll ref={scrollThumb} scrollBlock={scrollBlock} style={{ display: 'none' }} />
    </section>
  );
};

export default Filters;