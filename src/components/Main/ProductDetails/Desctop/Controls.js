import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentProduct, setGeneralBlockContent } from '../../../../store/actions';
import { productsObj } from '../../../../data/productsData';
import { ReactComponent as Arrow } from '../../../../assets/img/toggle-arrow.svg';
import { ReactComponent as CloseIcon } from '../../../../assets/img/Product_details/close.svg';

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
      currentItemIndex = productsObj.length;
      return;
    };
    const currentItem = productsObj[currentItemIndex];
    dispatch(setCurrentProduct(currentItem));
  };

  const closeDetails = () => {
    dispatch(setGeneralBlockContent('home'));
  };

  return (
    <div className="pdp-controls">
      <nav>
        <button onClick={() => setNextItem(false)}>
          <Arrow className="toggle-arrow arrow-left" />
          <span>prv</span>
        </button>
        <span>&nbsp;/&nbsp;</span>
        <button onClick={() => setNextItem(true)}>
          <span>nxt</span>
          <Arrow className="toggle-arrow arrow-right" />
        </button>
      </nav>
      <button className="pdp-close-btn" onClick={closeDetails}>
        <span className="pdp-close-btn__txt">close</span>
        <CloseIcon />
      </button>
    </div>
  );
};

export default Controls;