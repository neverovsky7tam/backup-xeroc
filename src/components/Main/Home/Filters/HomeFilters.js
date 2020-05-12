import React from 'react';
import Algorithm from './Algorithm/Algorithm';
import Coins from './Coins/Coins';
import Equipment from './Equipment/Equipment';
import Manufacturer from './Manufacturer/Manufacturer';
import Search from './Search/Search';
import Price from './Price/Price';
import Scroll from '../../Scroll/Scroll';
import { calcToScroll } from '../../Scroll/Scroll';

const HomeFilters = () => {
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
          <Algorithm />
          <Coins />
          <Equipment />
          <Manufacturer />
          <Price />
          <Search />
        </div>
      </div>
      <Scroll ref={scrollThumb} scrollBlock={scrollBlock} />
    </section>
  );
};

export default HomeFilters;