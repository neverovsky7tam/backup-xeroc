import store from '../../../../../store/store';
import { setOnSaleDisplay, setSearchToggle } from '../../../../../store/actions';
import { sortedProducts } from '../../../../../data/productsProcessing';

export const filterByPrice = (e, param) => {
  const filterOrigin = store.getState().filterOrigin;
  console.log('filterOrigin', filterOrigin);

  const globalObj = sortedProducts.byID;

  const value = e.target.value;
  console.log('value', value, param);   
};