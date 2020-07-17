import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentProduct, setGeneralBlockContent } from 'store/actions';
import { productsObj } from 'data/productsData';
import NavBtns from './NavBtns';
import { Close } from 'svg/svgProductDetails';

const Controls = ({ itemID }) => {
  const dispatch = useDispatch();
  let currentItemIndex = itemID - 1;

  const setNextItem = (param) => {
    currentItemIndex = (param) ? currentItemIndex + 1 : currentItemIndex - 1;
    if (currentItemIndex < 0) {
      currentItemIndex = 0;
      return;
    }
    if (currentItemIndex > productsObj.length - 1) {
      currentItemIndex = productsObj.length - 1;
      return;
    };
    const currentItem = productsObj[currentItemIndex];
    dispatch(setCurrentProduct(currentItem));
  };

  const closeDetails = () => {
    dispatch(setGeneralBlockContent('home'));
  };

  return (
    <div className="pdp-controls pdp-controls_general">
      <NavBtns func={setNextItem} />
      <button className="pdp-close-btn" onClick={closeDetails}>
        <span className="pdp-close-btn__txt">close</span>
        <div>{Close}</div>
      </button>
    </div>
  );
};

export default Controls;