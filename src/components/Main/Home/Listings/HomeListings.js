import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentScrollTop } from '../../../../store/actions'
import renderProducts from '../OnSale/renderProducts';
import ProductTile from '../OnSale/ProductTile';

const HomeListings = ({ productsObj }) => {
  const data = productsObj.slice(0, 10);

  const scrollBlock = React.createRef();

  const dispatch = useDispatch();
  const scrollTop = useSelector((state) => state.scrollHeight);

  const listingsSectionCssClass = useSelector((state) => state.listingsSectionCssClass);
  const cssClass = (listingsSectionCssClass) ? listingsSectionCssClass : 'listings home-page';

  useLayoutEffect(() => {
    scrollBlock.current.scrollTop = scrollTop;
  });

  const calcScrollState = () => {
    const elem = scrollBlock.current;
    const scrollBottom = elem.scrollHeight - elem.offsetHeight - elem.scrollTop;

    if (elem.scrollTop === 0) {
      let mediumScrollHeight = elem.scrollHeight / 2;
      if (mediumScrollHeight === scrollTop) mediumScrollHeight += 1;
      dispatch(setCurrentScrollTop(mediumScrollHeight));
    }

    if (scrollBottom < 1) {
      let currentScrollHeight = elem.scrollHeight / 2 - elem.offsetHeight;
      if (currentScrollHeight === scrollTop) currentScrollHeight += 1;
      dispatch(setCurrentScrollTop(currentScrollHeight));
    }
  }

  return (
    <section className={cssClass}>
      <div className="main-header">
        <h2>new listings</h2>
      </div>
      <div className="listings__body main-body">
        <ul
          className="scroll-container"
          ref={scrollBlock}
          onScroll={calcScrollState}>
          {renderProducts(ProductTile, data)}
        </ul>
      </div>
    </section>
  )
}

export default HomeListings;