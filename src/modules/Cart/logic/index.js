import store from 'store/store'
import { setItemToCart } from 'store/actions';

let preSelectItem = null;

export const setPreSelectItem = (item, hashElem, hashOpt) => {
  preSelectItem = Object.assign({}, item);
  preSelectItem.hash = hashElem;
  preSelectItem.hash.option = hashOpt;
  preSelectItem.productsQuantity = 1;
};

export const addToCart = (item) => {
  let product = null;

  const setProduct = () => {
    product = Object.assign({}, item);
    product.hash = item.hash.value[0];
    product.hash.option = item.hash.option;
    product.productsQuantity = 1;
  };

  if (!preSelectItem) {
    setProduct();
  } else {
    if (preSelectItem.id === item.id) product = preSelectItem;
    else setProduct();
  }
  store.dispatch(setItemToCart(product));
};


// window.addEventListener('beforeunload', () => {
//   const { itemsInCart } = store.getState();
//   if (itemsInCart.length) {
//     const obj = JSON.stringify(itemsInCart);
//     localStorage.setItem('xeroc-cart', obj);
//   }
// });
