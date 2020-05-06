import store from '../../../../../store/store';
import { setOnSaleDisplay, setSearchToggle } from '../../../../../store/actions';
import { sortedProducts } from '../../../../../data/productsProcessing';

export const filterByPrice = (e) => {
  console.log('e', e.target.value);
};