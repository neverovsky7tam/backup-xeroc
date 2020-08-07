import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCartState } from 'store/actions';
import CartItems from './components/CartItems';
import CartFooter from './components/CartFooter';
import { Diamond } from 'components/Parts/Parts';
import { CloseCross } from 'svg/svg';

const CartDT = () => {
  const dispatch = useDispatch();

  const CUT_HEIGHT = 333;
  const height = document.documentElement.clientHeight - CUT_HEIGHT;
  const bodyHeight = { maxHeight: `${height}px` };
  useEffect(() => {
    console.log('height', document.documentElement.clientHeight);
    // const CUT_HEIGHT = 323;
    // const height = document.documentElement.clientHeight - CUT_HEIGHT;
    // const bodyHeight = { maxHeight: `${height}px` };
  });

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
            <CartItems />
          </div>
        </div>
        <CartFooter />
      </div>
      <Diamond />
    </div>
  );
};

export default CartDT;