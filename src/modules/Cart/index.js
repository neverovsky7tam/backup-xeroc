import React from 'react';
import { useSelector } from 'react-redux';
import CartMB from './CartMB';
import CartDT from './CartDT';
import CartItem from './components/CartItem';

const Cart = ({ isMobile }) => {
  const cartStore = useSelector((state) => state.itemsInCart);

  const items = cartStore.items.map((el, idx) => {
    return <CartItem
      key={idx}
      item={el} />
  });

  if (isMobile) {
    return (
      <CartMB
        items={items} />
    )
  } else {
    return (
      <CartDT
        items={items} />
    )
  }
};

export default Cart;