import React, { useState } from 'react';
// import { useDispatch, useStore } from 'react-redux';
import { expandFilter } from './logicFilters';
import AlgorithmFilter from './AlgorithmFilter';
import Scroll from '../../Scroll/Scroll';
import { BoxDecor } from '../../../Parts/BoxDecor';
import { ReactComponent as ArrowDots } from '../../../../assets/img/arrow-dots.svg';

const HomeFilters = () => {
  const [byAlgorithm, setByAlgorithm] = useState(false);

  const algorithmFilterSelect = React.createRef();

  const scrollThumb = React.createRef();
  const scrollBlock = React.createRef();

  const onInputChange = (e) => {
    const input = e.target;
    console.log('onChange', e.target.value);
  };

  return (
    <section className="filters home-page">
      <div className="main-header">
        <h2>filters</h2>
      </div>
      <div className="filters__body main-body">
        <div ref={scrollBlock}>
          <div className="algorithm">
            <div className="p-relative">
              <div
                className="filters__select"
                ref={algorithmFilterSelect}
                onClick={(e) => expandFilter(e, byAlgorithm, setByAlgorithm)}>
                <input
                  onChange={onInputChange}
                  type="text"
                  placeholder="By Algorithm" />
                <div className="arrow">
                  <ArrowDots />
                </div>
              </div>
              <BoxDecor />
            </div>
            {byAlgorithm && <AlgorithmFilter field={algorithmFilterSelect} />}
          </div>
          <div className="search p-relative">
            <div className="p-relative">
              <div className="filters__select">
                <input
                  type="text"
                  placeholder="Search" />
              </div>
              <BoxDecor />
            </div>
          </div>
        </div>
      </div>
      <Scroll ref={scrollThumb} scrollBlock={scrollBlock} />
    </section>
  )
};

export default HomeFilters;