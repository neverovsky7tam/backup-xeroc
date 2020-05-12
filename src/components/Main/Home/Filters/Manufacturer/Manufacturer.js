import React, { useState } from 'react';
import ManufacturerSelect from './ManufacturerSelect';
import ManufacturerFilter from './ManufacturerFilter';
import ManufacturerSearch from './ManufacturerSearch';
import { BoxDecor } from '../../../../Parts/BoxDecor';

const Manufacturer = () => {
  const [isExpand, setExpand] = useState(false);
  const [isSearch, setSearchExpand] = useState(false);
  const [itemsArr, setItemsArr] = useState([]);

  return (
    <div className="filter manufacturer">
      <div className="p-relative">
        <ManufacturerSelect
          isExpand={isExpand}
          isSearch={isSearch}
          setExpand={setExpand}
          setSearchExpand={setSearchExpand}
          setItemsArr={setItemsArr} />
        <BoxDecor />
      </div>
      {isExpand && <ManufacturerFilter />}
      {isSearch && <ManufacturerSearch
        itemsArr={itemsArr}
        setExpand={setExpand}
        setSearchExpand={setSearchExpand} />}
    </div>
  );
};

export default Manufacturer;