import store from '../../../../store/store';
import { setOnSaleDisplay, setFiltersState } from '../../../../store/actions';
import { sortedProducts } from '../../../../data/productsProcessing';

const tempObj = {};
export const setProductsDisplay = (isActive, value, isEmpty) => {
  const productsArr = Object.values(sortedProducts[value]);

  if (productsArr.length) {
    productsArr.forEach((el) => {
      if (isActive) {
        if (!tempObj[el.id]) tempObj[el.id] = el;
      } else {
        if (tempObj[el.id]) delete tempObj[el.id];
      }
    });
  }

  if (isEmpty) store.dispatch(setOnSaleDisplay(Object.values(tempObj)));
  else store.dispatch(setOnSaleDisplay(null));
};

export const onItemClick = (e, filtersStateObj) => {
  const item = e.currentTarget;
  item.dataset.active = (+item.dataset.active) ? 0 : 1;
  const isActive = +item.dataset.active;
  const value = item.dataset.value;
  filtersStateObj[value] = isActive;
  store.dispatch(setFiltersState('algorithm', 'filter', filtersStateObj));
  store.dispatch(setFiltersState('algorithm', 'tag', value));

  const isEmpty = Object.values(filtersStateObj).reduce((sum, val) => sum + val);
  setProductsDisplay(isActive, value, isEmpty);
}

export const expandFilter = (e, isExpand, setExpandFilter) => {
  const filter = e.currentTarget;
  const arrowBtn = e.currentTarget.children[1];

  if (!isExpand) {
    filter.classList.add('filter__select_expand');
    arrowBtn.style.transform = 'rotate(180deg)';
    setExpandFilter(!isExpand);
  };

  if (e.target.closest('.arrow')) {
    if (isExpand) {
      arrowBtn.style.transform = '';
      filter.classList.remove('filter__select_expand');
    } else {
      arrowBtn.style.transform = 'rotate(180deg)';
      filter.classList.add('filter__select_expand');
    };
    setExpandFilter(!isExpand);
  };
};
