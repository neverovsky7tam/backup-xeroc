import store from '../../../../store/store';
import { setOnSaleDisplay, setFiltersState } from '../../../../store/actions';
import { sortedProducts } from '../../../../data/productsData';

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

// export const setFilterBorder = (countFilters, field) => {
//   if (countFilters.length) {
//     field.current.classList.add('filter__select_active');
//   } else {
//     field.current.classList.remove('filter__select_active');
//   };
// };

// const countFilters = [];
export const onItemClick = (e, filtersStateObj) => {
  const item = e.currentTarget;
  // item.classList.toggle('filter__item_active');
  item.dataset.active = (+item.dataset.active) ? 0 : 1;
  const isActive = +item.dataset.active;
  const value = item.dataset.value;
  filtersStateObj[value] = isActive;
  console.log('filtersStateObj', filtersStateObj)
  store.dispatch(setFiltersState('algorithm', filtersStateObj));
  // (+item.dataset.active) ? countFilters.push(1) : countFilters.pop();
  const isEmpty = Object.values(filtersStateObj).reduce((sum, val) => sum + val);
  console.log('isEmpty', isEmpty);
  setProductsDisplay(isActive, value, isEmpty);
  // setFilterBorder(countFilters, field);
}

export const expandFilter = (e, isExpand, setExpandFilter) => {
  const filter = e.currentTarget;
  const arrowBtn = e.currentTarget.children[1];
  // const input = e.currentTarget.children[0];

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
