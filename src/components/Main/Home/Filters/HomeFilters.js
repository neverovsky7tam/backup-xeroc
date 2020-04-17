import React from 'react';
// import Scroll from '../Scroll/Scroll';

const HomeFilters = () => {
  const scrollBlock = React.createRef();

  return (
    <section className="filters home-page">
      <div className="main-header">
        <h2>filters</h2>
      </div>
      <div className="filters-inner main-body">
        <div ref={scrollBlock}>
          Lorem ipsum dolor
        </div>
      </div>
      {/* <Scroll /> */}
    </section>
  )
}

export default HomeFilters;