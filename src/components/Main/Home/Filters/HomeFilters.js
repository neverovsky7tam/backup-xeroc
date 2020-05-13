import React from 'react';
import Filter from './Filter/Filter';
import ByText from './Search/ByText';
import Price from './Search/ByPrice';
import Scroll from '../../Scroll/Scroll';
import { calcToScroll } from '../../Scroll/Scroll';
import { algorithmsSpecies, coinsSpecies, equipmentSpecies, manufacturerSpecies } from '../../../../data/productsData';

const HomeFilters = () => {
  const scrollThumb = React.createRef();
  const scrollBlock = React.createRef();

  const setScroll = () => {
    const scroll = calcToScroll(scrollBlock.current);
    scrollThumb.current.style.transform = `translateY(${scroll.toScroll}px)`;
  };

  const filtersArr = [['algorithm', algorithmsSpecies], ['coins', coinsSpecies], ['equipment', equipmentSpecies], ['manufacturer', manufacturerSpecies]];

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
          {filtersArr.map((el) => <Filter
            key={el[0]}
            filterName={el[0]}
            filterProps={el[1]} />)}
          <Price />
          <ByText />
        </div>
      </div>
      <Scroll ref={scrollThumb} scrollBlock={scrollBlock} />
    </section>
  );
};

export default HomeFilters;