import React from 'react';
import { ReactComponent as ArrowDropdownMenu } from '../../../assets/img/arrow-dropdown-menu.svg';

const Select = ({ item }) => {
  const arrow = React.createRef();
  const select = React.createRef();

  let isExpandList = false;
  const expandItemInner = () => {
    if (!isExpandList) {
      item.current.style.overflow = 'visible';
      arrow.current.style.transform = 'rotate(180deg)';
      select.current.style.overflow = 'visible';
      isExpandList = true;
    } else {
      item.current.style = '';
      arrow.current.style = '';
      select.current.style = '';
      isExpandList = false;
    }
  }

  return (
    <div className="select" ref={select}>
      <div className="select__show">
        <span>hash</span>
        <div onClick={expandItemInner}>
          <ArrowDropdownMenu ref={arrow} />
        </div>
      </div>
      <ul className="select__list">
        <li>hash var</li>
        <li>hash var</li>
        <li>hash var</li>
      </ul>
    </div>
  )
}

export default Select;