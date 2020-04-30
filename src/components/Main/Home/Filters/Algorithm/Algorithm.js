import React, { useState } from 'react';
import AlgorithmSelect from './AlgorithmSelect';
import AlgorithmFilter from './AlgorithmFilters';
import AlgorithmSearch from './AlgorithmSearch';
import { BoxDecor } from '../../../../Parts/BoxDecor';

const Algorithm = () => {
  const [isExpand, setExpand] = useState(false);
  const [isSearch, setSearchExpand] = useState(false);
  const [filtersArr, setFiltersArr] = useState([]);

  return (
    <div className="filter algorithm">
      <div className="p-relative">
        <AlgorithmSelect
          isExpand={isExpand}
          isSearch={isSearch}
          setExpand={setExpand}
          setSearchExpand={setSearchExpand}
          setFiltersArr={setFiltersArr} />
        <BoxDecor />
      </div>
      {isExpand && <AlgorithmFilter />}
      {isSearch && <AlgorithmSearch
        filtersArr={filtersArr}
        setExpand={setExpand}
        setSearchExpand={setSearchExpand} />}
    </div>
  )
};

export default Algorithm;