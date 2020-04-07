import React from 'react';
import { ReactComponent as MenuSeparate } from '../../assets/img/Header/menu-separate.svg';
import { ReactComponent as CartIcon } from '../../assets/img/Header/cart.svg';

const Cart = ({ isLogin }) => {
  return (
    <>
      {isLogin &&
        <>
          <span className="cart__menu-currency line-height-8">$</span>
          <span className="cart__menu-value line-height-8">457</span>
          <MenuSeparate className="user-menu__separate" />
          <div className="cart__menu-counter line-height-8">0</div>
        </>
      }
      <CartIcon className="cart-icon cursor-pointer" />
    </>
  )
}

export default Cart;