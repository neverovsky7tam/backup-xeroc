import React from 'react';
import Filter from './Filter/Filter';
import ByText from './Search/ByText';
import Price from './Search/ByPrice';
import { algorithmsSpecies, coinsSpecies, equipmentSpecies, manufacturerSpecies } from '../../../data/productsData';

const FiltersBlock = ({ checkScroll }) => {
  const filterBlock = React.createRef();

  const checkHeight = () => {
    checkScroll(filterBlock.current.clientHeight);
  }

  const filtersArr = [['algorithm', algorithmsSpecies], ['coins', coinsSpecies], ['equipment', equipmentSpecies], ['manufacturer', manufacturerSpecies]];

  return (
    <div className="filter-block" ref={filterBlock}>
      {filtersArr.map((el) => <Filter
        key={el[0]}
        filterName={el[0]}
        filterProps={el[1]}
        checkHeightBlock={checkHeight} />)}
      <Price />
      <ByText />
    </div>
  );
};

export default FiltersBlock;