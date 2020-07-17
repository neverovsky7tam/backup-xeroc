import React, { useEffect } from 'react';
import store from 'store/store';
import { useSelector, useDispatch } from 'react-redux';
import { setPageTopState, setCloseCross } from 'store/actions';
import PageTop from 'components/PageTop/PageTop';
import Filters from 'components/Filters/Filters';
import OnSale from 'components/OnSale/OnSale';
import Listings from 'components/Listings/Listings';
import News from 'components/News/News';
import ProductDetails_DT from 'components/ProductDetails/ProductDetails_DT';
import ProductDetails_MB from 'components/ProductDetails/ProductDetails_MB';
import { productsObj } from 'data/productsData';

const GeneralBlock = () => {
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.deviceType);
  const contentVar = useSelector((state) => state.generalBlockContent.current);

  let content = null;
  let pageTopContent = null;
  let isCloseCross = false;

  if (contentVar === 'home') {
    const isGridView = store.getState().productsListType;
    content = <OnSale isGridView={isGridView} />;
    pageTopContent = null;
  };

  if (contentVar === 'productDetails') {
    if (isMobile) {
      content = <ProductDetails_MB />;
      pageTopContent = 'Details';
      isCloseCross = true;
    } else {
      content = <ProductDetails_DT />;
    }
  };

  // scroll processing. hide/show 'page-top' component
  let checkPoint = 1;
  let flag = true;
  let distanceSave = 0;
  let endTouchPoint = null;

  const scrollProcessing = () => {
    const scrollTop = document.documentElement.scrollTop;

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

  const checkRules = () => {
    setTimeout(() => {
      const curretnScroll = document.documentElement.scrollTop;
      if (curretnScroll < (endTouchPoint - 8)) {
        dispatch(setPageTopState(pageTopContent));
      };
    }, 100);
  };

  const onTouchEnd = () => {
    endTouchPoint = document.documentElement.scrollTop;
    checkRules();
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollProcessing);
    if (isMobile) dispatch(setPageTopState(pageTopContent));
    if (isCloseCross) dispatch(setCloseCross(true));

    return () => document.removeEventListener('scroll', scrollProcessing);
  });

  if (isMobile) {
    let wrapperClass = 'wrapper-mob';
    if (contentVar === 'home') wrapperClass = 'home-mob';

    return (
      <>
        <PageTop />
        <div
          className={wrapperClass}
          onTouchEnd={onTouchEnd}>
          {content}
        </div>
      </>
    );
  } else {
    return (
      <div className="general">
        <Filters />
        <section className="general__center">
          {content}
        </section>
        <Listings productsObj={productsObj} />
        <News />
      </div>
    );
  };
};

export default GeneralBlock;