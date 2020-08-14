import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { delItemInCart } from 'store/actions';
import Container from 'components/BlocksUI/Container';
import { SquareBtn } from 'components/BlocksUI/Buttons/Buttons';
import {
  ToggleArrow,
  DeleteIcon
} from 'svg/svg';

const CartItem = ({ item, totalPrice }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.productsQuantity);
  const rightArrow = React.createRef();
  const leftArrow = React.createRef();

  if (item.title.length > 16) {
    item.title = item.title.slice(0, 11) + '...';
  };

  const setQuantityItem = (param) => {
    let counter = null;
    let updatedPrice = null;

    if (param) {
      if (quantity < 9) {
        counter = quantity + 1;
        updatedPrice = totalPrice + (+item.hash.price);
      }
    } else {
      if (quantity > 1) {
        counter = quantity - 1;
        updatedPrice = totalPrice - (+item.hash.price);
      }
    }

    if (counter) {
      item.productsQuantity = counter;
      item.itemInvoice = counter * (+item.hash.price);
      setQuantity(counter);
    }
  };

  const deleteItem = () => {
    dispatch(delItemInCart(item));
  }

  useEffect(() => {
    if (quantity === 1) {
      leftArrow.current.firstChild.firstChild.style.fill = '#c4c4c4';
    }

    if (quantity > 1 && quantity < 9) {
      leftArrow.current.firstChild.firstChild.style.fill = '#fff';
      rightArrow.current.firstChild.firstChild.style.fill = '#fff';
    }

    if (quantity === 9) {
      rightArrow.current.firstChild.firstChild.style.fill = '#c4c4c4';
    }
  });

  return (
    <li className="item">
      <div className="left-side">
        <div className="left-side__inner">
          <Container>
            <img src={item.img} alt={item.title} />
          </Container>
          <div
            className="item-button"
            onClick={deleteItem}>
            <SquareBtn icon={DeleteIcon} />
          </div>
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
          <div
            className="toggle-arrow toggle-arrow_left item-button"
            onClick={() => setQuantityItem(false)}>
            <button
              className="square-btn"
              ref={leftArrow}>
              {ToggleArrow}
            </button>
          </div>
          <div className="counter">{quantity}</div>
          <div
            className="toggle-arrow toggle-arrow_right item-button"
            onClick={() => setQuantityItem(true)}>
            <button
              className="square-btn"
              ref={rightArrow}>
              {ToggleArrow}
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
