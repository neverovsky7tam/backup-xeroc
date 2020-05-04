import React from 'react';
import store from '../../../../../store/store';
import { setOnSaleDisplay } from '../../../../../store/actions';
import { sortedProducts } from '../../../../../data/productsProcessing';
import { BoxDecor } from '../../../../Parts/BoxDecor';

const Search = () => {
  const element = React.createRef();
  const setBorder = (e) => {
    if (e.target.value) element.current.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    else element.current.style = '';
  }

  const onInputChange = (e) => {
    setBorder(e);

    let preRenderObj = store.getState().renderObj;
    if (!Object.keys(preRenderObj).length) preRenderObj = sortedProducts.byID;

    const renderObj = {};
    const searchObj = {};
    const searchValue = e.target.value.toLowerCase();

    const source = Object.keys(sortedProducts.search);
    const resultKeys = source.filter((el) => el.includes(searchValue));

    resultKeys.forEach((el) => {
      if (sortedProducts.search[el]) searchObj[el] = sortedProducts.search[el];
    });

    const findItems = Object.values(searchObj);
    findItems.forEach((el) => {
      if (preRenderObj[el.id]) renderObj[el.id] = el;
    });

    store.dispatch(setOnSaleDisplay(Object.values(renderObj)));
  }

  return (
    <div className="search p-relative">
      <div className="p-relative">
        <div className="filter__select" ref={element}>
          <input
            type="text"
            placeholder="Search"
            onChange={onInputChange} />
        </div>
        <BoxDecor />
      </div>
    </div>
  )
};

export default Search;