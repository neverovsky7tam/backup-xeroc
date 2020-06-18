import React, { useState } from 'react';
import FiltersBlock from './FiltersBlock';
import Scroll from '../Scroll/Scroll';
import { calcToScroll } from '../Scroll/Scroll';

const Filters = () => {
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
    if (filtersBlockHeight > scrollBlockHeight) scrollThumb.current.style.display = 'block';
    else {
      scrollThumb.current.style.display = 'none';
      scrollThumb.current.style.transform = '';
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
          <FiltersBlock checkScroll={checkScroll} />
        </div>
      </div>
      <Scroll ref={scrollThumb} scrollBlock={scrollBlock} />
    </section>
  );
};

export default Filters;