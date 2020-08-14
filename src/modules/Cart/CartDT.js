import React from 'react';
import { useDispatch } from 'react-redux';
import { setCartState } from 'store/actions';
import CartFooter from './components/CartFooter';
import { Diamond } from 'components/Parts/Parts';
import { CloseCross } from 'svg/svg';

const CartDT = ({ items, totalPrice }) => {
  console.log('items', items)
  const dispatch = useDispatch();

  const CUT_HEIGHT = 333;
  const height = document.documentElement.clientHeight - CUT_HEIGHT;
  const bodyHeight = { maxHeight: `${height}px` };

  let header = 'Review your cart';
  let content = (
    <>
      <div className="cart__body">
        <div
          className="cart__content"
          style={bodyHeight}>
          <ul className="item-list">{items}</ul>
        </div>
      </div>
      <CartFooter totalPrice={totalPrice} />
    </>
  );

  if (!items.length) {
    header = 'Your cart is empty';
    content = null;
  };

  return (
    <div className="cart-dt">
      <div className="cart__inner">
        <div className="cart__header">
          <h4>{header}</h4>
          <div
            className="close-cross"
            onClick={() => dispatch(setCartState(false))}>
            {CloseCross}
          </div>
        </div>
        {content}
      </div>
      <Diamond />
    </div>
  );
};

export default CartDT;