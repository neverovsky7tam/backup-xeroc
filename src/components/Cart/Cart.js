import React from 'react';
import { ReactComponent as MenuSeparate } from '../../assets/img/Header/menu-separate.svg';
import { ReactComponent as CartIcon } from '../../assets/img/Header/cart-icon.svg';

const Cart = ({ isLogin }) => {
  return (
    <>
      {isLogin &&
        <>
          <span className="cart__menu-currency">$</span>
          <span className="cart__menu-value">457</span>
          <MenuSeparate className="user-menu__separate" />
          <div className="cart__menu-counter">0</div>
        </>
      }
      <CartIcon className="cart-icon cursor-pointer" />
    </>
  )
}

export default Cart;