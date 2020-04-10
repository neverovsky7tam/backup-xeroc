import React, { useState } from 'react';
import Scroll from '../Scroll/Scroll';

const HomeFilters = () => {
  const [toScroll, setScroll] = useState(0);
  const scrollBlock = React.createRef();

  return (
    <section className="filters">
      <h2>filters</h2>
      <div className="filters-inner main-section-inner">
        <div ref={scrollBlock}>
          Lorem ipsum dolor
        </div>
        <Scroll top={toScroll} />
      </div>
    </section>
  )
}

export default HomeFilters;