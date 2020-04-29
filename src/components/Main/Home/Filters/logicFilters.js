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

export const setFilters = (value, filtersStateObj, filter) => {
  let isActive = filtersStateObj[value];
  isActive = (+isActive) ? 0 : 1;
  filtersStateObj[value] = isActive;

  store.dispatch(setFiltersState(filter, 'filter', filtersStateObj));
  store.dispatch(setFiltersState(filter, 'tag', value));

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
      const elementsInField = filter.children[0].childNodes.length;
      if (elementsInField < 2) filter.classList.remove('filter__select_expand');
    } else {
      arrowBtn.style.transform = 'rotate(180deg)';
      filter.classList.add('filter__select_expand');
    };
    setExpandFilter(!isExpand);
  };
};
