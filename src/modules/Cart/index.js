import React from 'react';
import CartMB from './CartMB';
import CartDT from './CartDT';

const Cart = ({ isMobile }) => {
  if (isMobile) {
    return (<CartMB />)
  } else {
    return (<CartDT />)
  }
};

export default Cart;