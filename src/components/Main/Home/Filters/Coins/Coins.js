import React, { useState } from 'react';
import CoinsSelect from './CoinsSelect';
import CoinsFilter from './CoinsFilter';
import CoinsSearch from './CoinsSearch';
import { BoxDecor } from '../../../../Parts/BoxDecor';

const Coins = () => {
  const [isExpand, setExpand] = useState(false);
  const [isSearch, setSearchExpand] = useState(false);
  const [itemsArr, setItemsArr] = useState([]);

  return (
    <div className="filter coins">
      <div className="p-relative">
        <CoinsSelect
          isExpand={isExpand}
          isSearch={isSearch}
          setExpand={setExpand}
          setSearchExpand={setSearchExpand}
          setItemsArr={setItemsArr} />
        <BoxDecor />
      </div>
      {isExpand && <CoinsFilter />}
      {isSearch && <CoinsSearch
        itemsArr={itemsArr}
        setExpand={setExpand}
        setSearchExpand={setSearchExpand} />}
    </div>
  )
};

export default Coins;