import React, { useState } from 'react';
import AlgorithmSelect from './AlgorithmSelect';
import AlgorithmFilter from './AlgorithmFilters';
import AlgorithmSearch from './AlgorithmSearch';
import { BoxDecor } from '../../../../Parts/BoxDecor';

const Algorithm = () => {
  const [isExpand, setExpand] = useState(false);
  const [isSearch, setSearchExpand] = useState(false);
  const [itemsArr, setItemsArr] = useState([]);

  return (
    <div className="filter algorithm">
      <div className="p-relative">
        <AlgorithmSelect
          isExpand={isExpand}
          isSearch={isSearch}
          setExpand={setExpand}
          setSearchExpand={setSearchExpand}
          setItemsArr={setItemsArr} />
        <BoxDecor />
      </div>
      {isExpand && <AlgorithmFilter />}
      {isSearch && <AlgorithmSearch
        itemsArr={itemsArr}
        setExpand={setExpand}
        setSearchExpand={setSearchExpand} />}
    </div>
  )
};

export default Algorithm;