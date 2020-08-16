import store from 'store/store'
import { setItemToCart } from 'store/actions';

let preSelectItem = null;

export const setPreSelectItem = (item, hashElem, hashOpt) => {
  preSelectItem = Object.assign({}, item);
  preSelectItem.hash = hashElem;
  preSelectItem.hash.option = hashOpt;
  preSelectItem.itemInvoice = +item.hash.value[0].price;
};

export const addToCart = (item) => {
  let product = null;

  const setProduct = () => {
    product = Object.assign({}, item);
    product.hash = item.hash.value[0];
    product.hash.option = item.hash.option;
    product.itemInvoice = +item.hash.value[0].price;
  };

  if (!preSelectItem) {
    setProduct();
  } else {
    if (preSelectItem.id === item.id) product = preSelectItem;
    else setProduct();
  }
  store.dispatch(setItemToCart(product));
};
