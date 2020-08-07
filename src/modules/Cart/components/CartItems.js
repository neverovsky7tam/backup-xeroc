import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Container from 'components/BlocksUI/Container';
import { SquareBtn } from 'components/BlocksUI/Buttons/Buttons';
import {
  ToggleArrow,
  DeleteIcon
} from 'svg/svg';

const Item = (item) => {
  const [quantity, setQuantity] = useState(item.productsQuantity);

  console.log('title', item.title.length);
  if (item.title.length > 16) {
    item.title = item.title.slice(0, 12) + '...';
  }

  return (
    <li className="item">
      <div className="left-side">
        <div className="left-side__inner">
          <Container>
            <img src={item.img} alt={item.title} />
          </Container>
          <div className="item-button"><SquareBtn icon={DeleteIcon} /></div>
        </div>
      </div>
      <div className="right-side">
        <div className="item__description main-font main-line-height">
          <div>
            <h4>{item.title}</h4>
            <span className="item__txt">{item.hash.h} {item.hash.option}</span>
          </div>
          <div className="item__price">
            ${item.hash.price}.00
            </div>
        </div>
        <div className="item__controls">
          <div className="toggle-arrow toggle-arrow_left item-button"><SquareBtn icon={ToggleArrow} /></div>
          <div className="counter">{quantity}</div>
          <div className="toggle-arrow toggle-arrow_right item-button"><SquareBtn icon={ToggleArrow} /></div>
        </div>
      </div>
    </li>
  );
};

const CartItems = () => {
  const storeItems = useSelector((state) => state.itemsInCart);
  console.log('storeItems', storeItems);

  const items = storeItems.map((el) => Item(el));

  return (<ul className="item-list">{items}</ul>);
};

export default CartItems;
