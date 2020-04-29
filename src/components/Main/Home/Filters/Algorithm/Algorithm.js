import React, { useState } from 'react';
import AlgorithmSelect from './AlgorithmSelect';
import AlgorithmFilter from './AlgorithmFilters';
import { BoxDecor } from '../../../../Parts/BoxDecor';

const Algorithm = () => {
  const [isExpand, setExpandFilter] = useState(false);

  return (
    <div className="filter algorithm">
      <div className="p-relative">
        <AlgorithmSelect
          isExpand={isExpand}
          setExpandFilter={setExpandFilter} />
        <BoxDecor />
      </div>
      {isExpand && <AlgorithmFilter />}
    </div>
  )
};

export default Algorithm;