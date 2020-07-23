import React from 'react';
import { BoxDecor } from 'components/Parts/BoxDecor';

const DropList = ({ contentArr }) => {
  const renderList = () => {
    const items = contentArr.map((el, idx) => {
      return (
        <li
          key={idx}
          className="drop-list__item"
          onClick={el.func}>
          {el.text}
        </li>
      );
    });
    return items;
  };

  return (
    <div className="drop-list">
      <ul className="drop-list__inner main-font">
        <div>{renderList()}</div>
        <BoxDecor />
      </ul>
    </div>
  );
};

export default DropList;