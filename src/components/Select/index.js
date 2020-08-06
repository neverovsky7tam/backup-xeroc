import React from 'react';
import { setPreSelectItem } from 'mod/Cart/logic';
import { BoxDecor } from 'components/Parts/BoxDecor';
import { ArrowDots } from 'svg/svg';

const Select = React.forwardRef(({ item, hashArr, displayHash, hashOpt, expandFunc, hashClick, isDesctopTemplate }, ref) => {
  const onHashClick = (hashElem) => {
    hashClick(hashElem);
    setPreSelectItem(item, hashElem, hashOpt);
  };

  const hashList = () => {
    if (hashArr.length > 1) {
      const arr = hashArr.slice();
      return arr.map((el) => {
        return (
          <li
            key={el.id}
            onClick={() => onHashClick(el)}>
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
            <span ref={ref.arrow}>{ArrowDots}</span>
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