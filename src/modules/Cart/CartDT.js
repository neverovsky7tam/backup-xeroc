import React from 'react';
import { useDispatch } from 'react-redux';
import { setCartState } from 'store/actions';
import CartEmpty from './components/CartEmpty';
import CartFooter from './components/CartFooter';
import { Diamond } from 'components/Parts/Parts';
import { CloseCross } from 'svg/svg';

const CartDT = ({ items, totalPrice }) => {
  const dispatch = useDispatch();

  const CUT_HEIGHT = 333;
  const height = document.documentElement.clientHeight - CUT_HEIGHT;
  const bodyHeight = { maxHeight: `${height}px` };

  return (
    <div className="cart-dt">
      <div className="cart__inner">
        <div className="cart__header">
          <h4>Review your cart</h4>
          <div
            className="close-cross"
            onClick={() => dispatch(setCartState(false))}>
            {CloseCross}
          </div>
        </div>
        <div className="cart__body">
          <div
            className="cart__content"
            style={bodyHeight}>
            {(items.length) ?
              (<ul className="item-list">{items}</ul>) :
              <CartEmpty />
            }
          </div>
        </div>
        <CartFooter totalPrice={totalPrice} />
      </div>
      <Diamond />
    </div>
  );
};

export default CartDT;