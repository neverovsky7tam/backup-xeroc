import React from 'react';
import { BoxDecor } from '../../Parts/BoxDecor';
import { ReactComponent as ArrowDropdownMenu } from '../../../assets/img/arrow-dropdown-menu.svg';

const Select = React.forwardRef(({ hashArr, displayHash, hashOpt, expandFunc, hashClick }, ref) => {
  const hashList = () => {
    if (hashArr.length > 1) {
      const arr = hashArr.slice();
      return arr.map((el) => {
        return (
          <li
            key={el.id}
            onClick={() => hashClick(el)}>
            {el.h} {hashOpt}
          </li>
        )
      });
    }
  }

  return (
    <div className="select" ref={ref.select}>
      <div className="select__shown-area">
        <span className="select__show-title">Hash rate: {displayHash} {hashOpt}</span>
        <div className="select__show-btn" onClick={expandFunc}>
          <ArrowDropdownMenu ref={ref.arrow} />
        </div>
      </div>
      <ul className="select__list">
        {hashList()}
      </ul>
      <BoxDecor />
    </div>
  )
});

export default Select;