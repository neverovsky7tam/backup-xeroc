import React from 'react';
import { useSelector } from 'react-redux';
import CartMB from './CartMB';
import CartDT from './CartDT';
import CartItem from './components/CartItem';

const Cart = ({ isMobile }) => {
  const storeItems = useSelector((state) => state.itemsInCart);
  console.log('store', storeItems);

  let totalPrice = 0;
  storeItems.forEach((el) => {
    totalPrice += el.itemInvoice;
  });

  // const [totalPrice, setTotalPrice] = useState(initialCost);

  const items = storeItems.map((el, idx) => {
    return <CartItem
      key={idx}
      item={el}
      totalPrice={totalPrice} />
  });

  if (storeItems.length) {
    if (isMobile) {
      return (
        <CartMB
          items={items}
          totalPrice={totalPrice} />
      )
    } else {
      return (
        <CartDT
          items={items}
          totalPrice={totalPrice} />
      )
    }
  } else {
    return null;
  }
};

export default Cart;