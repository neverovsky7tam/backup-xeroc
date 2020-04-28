import React from 'react';
import Algorithm from './Algorithm/Algorithm';
import Search from './Search/Search';
import Scroll from '../../Scroll/Scroll';

const HomeFilters = () => {
  const scrollThumb = React.createRef();
  const scrollBlock = React.createRef();

  return (
    <section className="filters home-page">
      <div className="main-header">
        <h2>filters</h2>
      </div>
      <div className="filters__body main-body">
        <div ref={scrollBlock}>
          <Algorithm />
          <Search />
        </div>
      </div>
      <Scroll ref={scrollThumb} scrollBlock={scrollBlock} />
    </section>
  )
};

export default HomeFilters;