import React, { useState } from 'react';
import AlgorithmFilter from './AlgorithmFilter';
import Scroll from '../../Scroll/Scroll';
import { BoxDecor } from '../../../Parts/BoxDecor';
import { ReactComponent as ArrowDots } from '../../../../assets/img/arrow-dots.svg';

const HomeFilters = () => {
  const [byAlgorithm, setByAlgotithm] = useState(false);


  const scrollThumb = React.createRef();
  const scrollBlock = React.createRef();

  const expandFilter = (e, filter, setFilterState) => {
    const filterSelect = e.target.closest('.filter-select');
    if (!filter) {
      filterSelect.classList.add('filter-select_active');
    } else {
      filterSelect.classList.remove('filter-select_active');
    }

    const arrowBtn = e.currentTarget;
    const degree = (filter) ? '0' : '180deg';
    arrowBtn.style.transform = `rotate(${degree})`;

    setFilterState(!filter);
  }

  return (
    <section className="filters home-page">
      <div className="main-header">
        <h2>filters</h2>
      </div>
      <div className="filters-body main-body">
        <div ref={scrollBlock}>
          <div className="algorithm">
            <div className="p-relative">
              <div className="filter-select">
                <span>By Algorithm</span>
                <div className="arrow" onClick={(e) => expandFilter(e, byAlgorithm, setByAlgotithm)}><ArrowDots /></div>
              </div>
              <BoxDecor />
            </div>
            {byAlgorithm && <AlgorithmFilter />}
          </div>
        </div>
      </div>
      <Scroll ref={scrollThumb} scrollBlock={scrollBlock} />
    </section>
  )
}

export default HomeFilters;