import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import FilterHead from './FilterHead';
import FilterMain from './FilterMain';
import FilterSearch from './FilterSearch';
import { BoxDecor } from 'components/Parts/BoxDecor';

const Filter = ({ filterName, filterProps, checkHeight }) => {
  const [isExpand, setExpand] = useState(false);
  const [isSearch, setSearchExpand] = useState(false);
  const [itemsArr, setItemsArr] = useState([]);

  const isMobile = useSelector((state) => state.deviceType);
  useEffect(() => {
    if (!isMobile) checkHeight();
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