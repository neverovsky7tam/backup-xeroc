import { sortedProducts } from '../../../../data/productsProcessing';

const setSliderItems = (item, type) => {
  let source = null;
  if (type === 'related') source = Object.values(sortedProducts.algorithm['Quark']);
  else source = Object.values(sortedProducts.coins.ltc);

  let productsRaw = source.filter((el) => el.id !== item.id);
  productsRaw = productsRaw.concat(productsRaw);
  const products = productsRaw.map((el) => Object.assign({}, el));
  products.forEach((el, idx) => el.id = idx);

  return products;
};

export default setSliderItems;
