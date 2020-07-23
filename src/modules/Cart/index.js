import React from 'react';
import { MenuSeparate, CartIcon } from 'svg/svgHeader';

const Cart = ({ isLogin }) => {
  return (
    <>
      {isLogin &&
        <>
          <div className="responsive-1919">
            <span className="cart__menu-currency line-height-8">$</span>
            <span className="cart__menu-value line-height-8">457</span>
          </div>
          <span className="user-menu__separate">{MenuSeparate}</span>
          <div className="cart__menu-counter line-height-8">0</div>
        </>
      }
      <button className="cart__btn cursor-pointer">
        <div className="cart-icon">{CartIcon}</div>
      </button>
    </>
  )
}

export default Cart;