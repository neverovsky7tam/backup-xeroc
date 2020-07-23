import React from 'react';
import { BoxDecor } from 'components/Parts/BoxDecor';

const FilterItems = ({ itemsArr, onItemClick, img }) => {
  const onHoverItem = (e, param) => {
    if (document.documentElement.clientWidth < 768) return;
    if (param) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
    else e.currentTarget.style.background = '';
  }

  const gridColumns = (img) ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)';
  const letterTransform = (img) ? 'uppercase' : 'none';

  if (itemsArr.length) {
    return (
      <ul
        className={(img) ? 'filter__items-container filter__items-container_img' : 'filter__items-container filter__items-container_txt'}
        style={{ gridTemplateColumns: gridColumns }}>
        {itemsArr.map((el, idx) => {
          return (
            <li
              key={idx}
              className="filter__item"
              data-active={el[1]}
              data-value={el[0]}
              onClick={onItemClick}>
              <div
                className={(el[1]) ? 'filter__item-inner item-active' : 'filter__item-inner'}
                style={{ textTransform: letterTransform }}
                onMouseEnter={(e) => onHoverItem(e, true)}
                onMouseLeave={(e) => onHoverItem(e, false)}>
                {img &&
                  <img
                    className="filter__item-img"
                    src={`/data/coins_img/${el[0]}.svg`} />}
                {el[0]}
              </div>
              <BoxDecor />
            </li>
          )
        })}
      </ul>
    );
  } else {
    return (
      <div className="filter__items-container filter__items-container_txt">
        <div className="filter__item filter__item_not-found">
          <div className="filter__item-inner">
            Not found
          </div>
          <BoxDecor />
        </div>
      </div>
    )
  };
};

export default FilterItems;