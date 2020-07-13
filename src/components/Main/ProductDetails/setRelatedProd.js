import { sortedProducts } from '../../../data/productsProcessing';

export const setRelatedProd = (item) => {
  console.log('rel-item', item);

  const source = Object.values(sortedProducts.algorithm['Quark']);
  let relatedProductsRaw = source.filter((el) => el.id !== item.id);
  relatedProductsRaw = relatedProductsRaw.concat(relatedProductsRaw);
  const relatedProducts = relatedProductsRaw.map((el) => Object.assign({}, el));
  relatedProducts.forEach((el, idx) => el.id = idx);

  console.log('relatedProducts', relatedProducts);
  return relatedProducts;
};