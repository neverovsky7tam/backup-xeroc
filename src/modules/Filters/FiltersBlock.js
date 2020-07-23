import React from 'react';
import Filter from './Filter';
import ByText from './Search/ByText';
import Price from './Search/ByPrice';
import { algorithmsSpecies, coinsSpecies, equipmentSpecies, manufacturerSpecies } from 'data/productsData';

const FiltersBlock = ({ scrollBlock, scrollThumb }) => {
  const filterBlock = React.createRef();

  const checkHeight = () => {
    const filterBlockHeight = filterBlock.current.offsetHeight;
    const scrollContainerHeight = scrollBlock.current.offsetHeight

    if (filterBlockHeight > scrollContainerHeight) {
      scrollThumb.current.style.display = '';
    } else {
      scrollThumb.current.style.display = 'none';
      scrollThumb.current.style.transform = '';
    }
  };

  const filtersArr = [['algorithm', algorithmsSpecies], ['coins', coinsSpecies], ['equipment', equipmentSpecies], ['manufacturer', manufacturerSpecies]];

  return (
    <div className="filter-block" ref={filterBlock}>
      {
        filtersArr.map((el) => (
          <Filter
            key={el[0]}
            filterName={el[0]}
            filterProps={el[1]}
            checkHeight={checkHeight} />
        ))
      }
      <Price />
      <ByText />
    </div>
  );
};

export default FiltersBlock;