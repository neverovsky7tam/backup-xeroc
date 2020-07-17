import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setElectricityValue, setProductsListType } from 'store/actions';
import { ArrowDots, ThreeDots, ViewIcon } from 'svg/svg';

const ViewSwitcher = ({ view, setView }) => {
  const dispatch = useDispatch();
  const val = useSelector((state) => state.electricityValue);

  const setElectricityVal = (e, param) => {
    e.target.addEventListener('selectstart', (evt) => {
      evt.preventDefault();
    });

    if (val < 0.015 && !param) return;
    (param) ? dispatch(setElectricityValue(val + 0.01)) :
      dispatch(setElectricityValue(val - 0.01));
  }

  const viewIcon = React.createRef();
  const dotsIcon = React.createRef();

  const switchView = () => {
    setView(!view);
    dispatch(setProductsListType(!view));
  };

  useEffect(() => {
    if (view) {
      dotsIcon.current.lastChild.style.fill = '#dadada';
      viewIcon.current.lastChild.style.fill = '';
    } else {
      viewIcon.current.lastChild.style.fill = '#dadada';
      dotsIcon.current.lastChild.style.fill = '';
    }
  });

  const viewState = (view) ? 'Grid' : 'Release list';

  return (
    <>
      {!view &&
        <div className="electicity-switcher d-flex align-items-center">
          <div className="electicity-switcher__active">
            <div
              className="arrow-left"
              onClick={(e) => setElectricityVal(e, false)}>
              {ArrowDots}
            </div>
            <div>{val.toFixed(2)}</div>
            <div
              className="arrow-right"
              onClick={(e) => setElectricityVal(e, true)}>
              {ArrowDots}
            </div>
          </div>
          <div className="electicity-switcher__title d-flex">
            <div className="green-text">$/kWh</div>
            <div>&nbsp;Electricity</div>
          </div>
        </div>
      }
      <div className="view-switcher" onClick={switchView}>
        <div className="view-switcher__active">
          <div className="view-switcher__active-title">View:</div>
          <div className="view-switcher__active-btn">{viewState}</div>
        </div>
        <span className="view-switcher__icon" ref={viewIcon}>{ViewIcon}</span>
        <span className="view-switcher__icon" ref={dotsIcon}>{ThreeDots}</span>
      </div>
    </>
  );
};

export default ViewSwitcher;