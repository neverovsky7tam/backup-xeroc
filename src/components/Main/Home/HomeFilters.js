import React from 'react';
// import Scroll from '../Scroll/Scroll';

const HomeFilters = () => {
  const scrollBlock = React.createRef();

  return (
    <section className="filters home-page">
      <h2>filters</h2>
      <div className="filters-inner main-section-inner">
        <div ref={scrollBlock}>
          Lorem ipsum dolor
        </div>
      </div>
      {/* <Scroll /> */}
    </section>
  )
}

export default HomeFilters;