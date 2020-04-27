import store from '../../../../store/store';
import { setOnSaleDisplay } from '../../../../store/actions';
import { sortedProducts } from '../../../../data/productsData';

const tempObj = {};
export const setProductsDisplay = (isActive, value, isActiveFilter) => {
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

  if (isActiveFilter) store.dispatch(setOnSaleDisplay(Object.values(tempObj)));
  else store.dispatch(setOnSaleDisplay(null));
};

export const setFilterBorder = (countFilters, field) => {
  if (countFilters.length) {
    field.current.classList.add('filters__select_active');
  } else {
    field.current.classList.remove('filters__select_active');
  };
};

const countFilters = [];
export const onItemClick = (e, field) => {
  const item = e.currentTarget;
  item.classList.toggle('filter__item_active');
  item.dataset.active = (+item.dataset.active) ? 0 : 1;
  const isActive = +item.dataset.active;
  const value = item.dataset.value;

  (+item.dataset.active) ? countFilters.push(1) : countFilters.pop();

  setProductsDisplay(isActive, value, countFilters.length);
  setFilterBorder(countFilters, field);
}

export const expandFilter = (e, filterItems, setFilterState) => {
  const filter = e.currentTarget;
  const arrowBtn = e.currentTarget.children[1];
  // const input = e.currentTarget.children[0];

  if (!filterItems) {
    filter.classList.add('filters__select_expand');
    arrowBtn.style.transform = 'rotate(180deg)';
    setFilterState(!filterItems);
  };

  if (e.target.closest('.arrow')) {
    if (filterItems) {
      arrowBtn.style.transform = '';
      filter.classList.remove('filters__select_expand');
    } else {
      arrowBtn.style.transform = 'rotate(180deg)';
      filter.classList.add('filters__select_expand');
    };
    setFilterState(!filterItems);
  };
};
