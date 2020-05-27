import React from 'react';
import FiltersBlock from './FiltersBlock';
import Scroll from '../Scroll/Scroll';
import { calcToScroll } from '../Scroll/Scroll';

const Filters = () => {
  const scrollThumb = React.createRef();
  const scrollBlock = React.createRef();

  const setScroll = () => {
    const scroll = calcToScroll(scrollBlock.current);
    scrollThumb.current.style.transform = `translateY(${scroll.toScroll}px)`;
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
          <FiltersBlock />
        </div>
      </div>
      <Scroll ref={scrollThumb} scrollBlock={scrollBlock} />
    </section>
  );
};

export default Filters;