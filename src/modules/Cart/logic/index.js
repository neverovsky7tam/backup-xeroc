import store from 'store/store'
import { setItemToCart } from 'store/actions';
let preSelectItem = null;

export const setPreSelectItem = (item, hashElem) => {
  preSelectItem = Object.assign({}, item);
  preSelectItem.hash = hashElem;
  // console.log('preSelectItem', preSelectItem);
};

export const addToCart = (item) => {
  let product = null;

  const setProduct = () => {
    product = Object.assign({}, item);
    const currentHash = product.hash.value[0];
    product.hash = currentHash;
  };

  if (!preSelectItem) {
    setProduct();
  } else {
    if (preSelectItem.id === item.id) product = preSelectItem;
    else setProduct();
  }
  store.dispatch(setItemToCart(product));
};