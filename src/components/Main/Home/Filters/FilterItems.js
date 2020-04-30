import React from 'react';
import { BoxDecor } from '../../../Parts/BoxDecor';

const FilterItems = ({ filtersArr, onItemClick }) => {
  if (filtersArr.length) {
    return (
      <ul className="filter__items-container filter__items-container_txt">
        {filtersArr.map((el, idx) => {
          return (
            <li
              key={idx}
              className={(el[1]) ? 'filter__item filter__item_active' : 'filter__item'}
              data-active={el[1]}
              data-value={el[0]}
              onClick={onItemClick}>
              <div className="filter__item-inner">
                {el[0]}
                <BoxDecor />
              </div>
            </li>
          )
        })}
      </ul>
    )
  } else {
    return (
      <div className="filter__items-container filter__items-container_txt">
        <div className="filter__item filter__item_not-found">
          <div className="filter__item-inner">
            Not found
            <BoxDecor />
          </div>
        </div>
      </div>
    )
  }

};

export default FilterItems;