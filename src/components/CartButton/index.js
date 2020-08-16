import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCartState } from 'store/actions';
import { MenuSeparate, CartIcon } from 'svg/svgHeader';

const CartButton = ({ isLogin }) => {
  const dispatch = useDispatch();

  let productsQuantity = useSelector((state) => state.itemsInCart.items.length);

  return (
    <div className="cart-control">
      <div className="d-flex align-items-center">
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
            <div className="value-holder">{productsQuantity}</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CartButton;