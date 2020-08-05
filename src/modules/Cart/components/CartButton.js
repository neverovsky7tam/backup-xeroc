import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCartState } from 'store/actions';
import { MenuSeparate, CartIcon } from 'svg/svgHeader';

const CartButton = ({ isLogin }) => {
  const dispatch = useDispatch();
  const { itemsInCart } = useSelector((state) => state);

  return (
    <>
      {isLogin &&
        <>
          <div className="responsive-1919">
            <span className="cart__menu-currency line-height-8">$</span>
            <span className="cart__menu-value line-height-8">457</span>
          </div>
          <span className="user-menu__separate">{MenuSeparate}</span>
        </>
      }
      <button
        className="cart-btn cursor-pointer"
        onClick={() => dispatch(setCartState(true))}>
        <div className="cart-icon">{CartIcon}</div>
        <div className="counter-box">
          <div className="value-holder">{itemsInCart.length}</div>
        </div>
      </button>
    </>
  );
};

export default CartButton;