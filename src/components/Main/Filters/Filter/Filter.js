import React, { useState, useEffect } from 'react';
import FilterHead from './FilterHead';
import FilterMain from './FilterMain';
import FilterSearch from './FilterSearch';
import { BoxDecor } from '../../../Parts/BoxDecor';

const Filter = ({ filterName, filterProps, checkHeightBlock }) => {
  const [isExpand, setExpand] = useState(false);
  const [isSearch, setSearchExpand] = useState(false);
  const [itemsArr, setItemsArr] = useState([]);

  useEffect(() => {
    checkHeightBlock();
  }, [isExpand]);

  return (
    <div className={`filter ${filterName}`}>
      <div className="p-relative">
        <FilterHead
          filterName={filterName}
          isExpand={isExpand}
          isSearch={isSearch}
          setExpand={setExpand}
          setSearchExpand={setSearchExpand}
          setItemsArr={setItemsArr} />
        <BoxDecor />
      </div>
      {isExpand && <FilterMain filterName={filterName} filterProps={filterProps} />}
      {isSearch && <FilterSearch
        filterName={filterName}
        itemsArr={itemsArr}
        setExpand={setExpand}
        setSearchExpand={setSearchExpand} />}
    </div>
  );
};

export default Filter;