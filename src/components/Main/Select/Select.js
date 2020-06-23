import React from 'react';
import { BoxDecor } from '../../Parts/BoxDecor';
import { ReactComponent as ArrowDropdownMenu } from '../../../assets/img/arrow-dots.svg';

const Select = React.forwardRef(({ hashArr, displayHash, hashOpt, expandFunc, hashClick, isDesctopTemplate }, ref) => {
  const hashList = () => {
    if (hashArr.length > 1) {
      const arr = hashArr.slice();
      return arr.map((el) => {
        return (
          <li
            key={el.id}
            onClick={() => hashClick(el)}>
            {el.h}&nbsp;{hashOpt}
          </li>
        )
      });
    }
  }

  return (
    <div className="select" ref={ref.select}>
      <div className="select__shown-area">
        <span className="main-font cursor-default">Hash{isDesctopTemplate && ' rate'}: {displayHash} {hashOpt}</span>
        {(hashArr.length > 1) &&
          <div className="select__show-btn" onClick={expandFunc}>
            <ArrowDropdownMenu ref={ref.arrow} />
          </div>}
      </div>
      {(hashArr.length > 1) &&
        <ul className="select__list main-font">
          {hashList()}
        </ul>}
      <BoxDecor />
    </div>
  )
});

export default Select;