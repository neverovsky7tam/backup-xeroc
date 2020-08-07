import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCartState } from 'store/actions';
import { MenuSeparate, CartIcon } from 'svg/svgHeader';

const CartButton = ({ isLogin }) => {
  const dispatch = useDispatch();

  let productsQuantity = useSelector((state) => state.itemsInCart.length);
  // console.log('productsQuantity', productsQuantity);

  // if (!initFlag) {
  //   console.log('init');
  //   initFlag = true;
  //   if (localStorage.getItem('xeroc-cart')) {
  //     const json = localStorage.getItem('xeroc-cart');
  //     const store = JSON.parse(json);
  //     productsQuantity = store.length;
  //     console.log('productsQuantity-store', productsQuantity);
  //   }
  // }

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
          <div className="value-holder">{productsQuantity}</div>
        </div>
      </button>
    </>
  );
};

export default CartButton;