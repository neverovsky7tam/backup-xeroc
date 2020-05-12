import React, { useState } from 'react';
import EquipmentSelect from './EquipmentSelect';
import EquipmentFilter from './EquipmentFilter';
import EquipmentSearch from './EquipmentSearch';
import { BoxDecor } from '../../../../Parts/BoxDecor';

const Equipment = () => {
  const [isExpand, setExpand] = useState(false);
  const [isSearch, setSearchExpand] = useState(false);
  const [itemsArr, setItemsArr] = useState([]);

  return (
    <div className="filter equipment">
      <div className="p-relative">
        <EquipmentSelect
          isExpand={isExpand}
          isSearch={isSearch}
          setExpand={setExpand}
          setSearchExpand={setSearchExpand}
          setItemsArr={setItemsArr} />
        <BoxDecor />
      </div>
      {isExpand && <EquipmentFilter />}
      {isSearch && <EquipmentSearch
        itemsArr={itemsArr}
        setExpand={setExpand}
        setSearchExpand={setSearchExpand} />}
    </div>
  )
};

export default Equipment;