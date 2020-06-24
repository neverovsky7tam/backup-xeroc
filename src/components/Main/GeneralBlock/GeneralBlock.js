import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPageTopState, setCloseCross } from '../../../store/actions';
import PageTop from '../../PageTop/PageTop';
import Filters from '../Filters/Filters';
import OnSale from '../OnSale/OnSale';
import Listings from '../Listings/Listings';
import News from '../News/News';
import ProductDetailsDT from '../ProductDetails/Desctop/ProductDetailsDT';
import ProductDetails from '../ProductDetails/Mobile/ProductDetails';
import { productsObj } from '../../../data/productsData';

const GeneralBlock = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.deviceType);
  const contentVar = useSelector((state) => state.generalBlockState.current);

  let content = null;
  let pageTopContent = null;
  let isCloseCross = false;

  if (contentVar === 'home') {
    content = <OnSale />;
  };

  if (contentVar === 'productDetails') {
    content = (isMobile) ? <ProductDetails /> : <ProductDetailsDT />;
    pageTopContent = 'Details';
    isCloseCross = true;
  };

  useEffect(() => {
    if (isMobile) dispatch(setPageTopState(pageTopContent));
  }, [pageTopContent]);

  useEffect(() => {
    if (isCloseCross) dispatch(setCloseCross(true));
  }, [isCloseCross]);

  // scroll processing. hide/show 'page-top' component
  let checkPoint = 1;
  let flag = true;
  let distanceSave = 0;
  let isTouchEnd = false;
  let fixTouchEndPoint = null;

  const scrollProcessing = () => {
    const scrollTop = document.documentElement.scrollTop;

    if (isTouchEnd && (scrollTop < (fixTouchEndPoint - 8))) {
      dispatch(setPageTopState(pageTopContent));
    };

    if (flag) {
      const delta = scrollTop - checkPoint;
      if (delta < 0) {
        checkPoint = scrollTop;
      };

      if (delta > 10) {
        flag = false;
        checkPoint = scrollTop;
        dispatch(setPageTopState(pageTopContent, 'p-absolute'));
      }
    } else {
      const distanceCurrent = scrollTop - checkPoint;

      if (distanceCurrent >= distanceSave) {
        distanceSave = distanceCurrent;
      } else {
        flag = true;
        checkPoint = scrollTop;
        distanceSave = 0;
      }
    };
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollProcessing);
    return () => document.removeEventListener('scroll', scrollProcessing);
  });

  const onTouchEnd = () => {
    isTouchEnd = true;
    setTimeout(() => isTouchEnd = false, 50);
    fixTouchEndPoint = document.documentElement.scrollTop;
  };

  return (
    <>
      {isMobile && <PageTop />}
      <div
        className="general"
        onTouchEnd={onTouchEnd}>
        {!isMobile && <Filters />}
        {content}
        {!isMobile && <Listings productsObj={productsObj} />}
        {!isMobile && <News />}
      </div>
    </>
  );
};

export default GeneralBlock;