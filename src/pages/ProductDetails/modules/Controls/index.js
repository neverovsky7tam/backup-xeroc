import React from 'react';
import { Link } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { setCurrentProduct } from 'store/actions';
//import { productsObj } from 'data/productsData';
import NavBtns from './NavBtns';
import { Close } from 'svg/svgProductDetails';

const Controls = ({ links }) => {
  // const dispatch = useDispatch();
  // let currentItemIndex = itemID - 1;

  // const setNextItem = (param) => {
  //   currentItemIndex = (param) ? currentItemIndex + 1 : currentItemIndex - 1;
  //   if (currentItemIndex < 0) {
  //     currentItemIndex = 0;
  //     return;
  //   }
  //   if (currentItemIndex > productsObj.length - 1) {
  //     currentItemIndex = productsObj.length - 1;
  //     return;
  //   };
  //   const currentItem = productsObj[currentItemIndex];
  //   dispatch(setCurrentProduct(currentItem));
  // };

  return (
    <div className="pdp-controls pdp-controls_general">
      <NavBtns links={links} />
      <button className="pdp-close-btn">
        <Link to="/" className="link-to">
          <span className="pdp-close-btn__txt">close</span>
          {Close}
        </Link>
      </button>
    </div>
  );
};

export default Controls;