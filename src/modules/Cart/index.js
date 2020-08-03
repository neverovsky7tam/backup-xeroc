import React from 'react';
import { useSelector } from 'react-redux';
import { MenuSeparate, CartIcon } from 'svg/svgHeader';

const Cart = ({ isLogin }) => {
  const { itemsInCart } = useSelector((state) => state)
  console.log('itemsInCart', itemsInCart.length);

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
        <div className="counter-box">
          <div className="value-holder">{itemsInCart.length}</div>
        </div>
      </button>
    </>
  )
}

export default Cart;