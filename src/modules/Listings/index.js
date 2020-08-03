import React from 'react';
import { useSelector } from 'react-redux';
import renderProducts from 'components/Products/renderProducts';
import ProductTile from 'components/Products/ProductTile';
import { productsObj } from 'data/productsData';

const Listings = () => {
  const data = productsObj.slice(0, 12);

  const listingsSectionCssClass = useSelector((state) => state.listingsSectionCssClass);
  const cssClass = (listingsSectionCssClass) ? listingsSectionCssClass : 'listings';

  return (
    <section className={cssClass}>
      <div className="main-header">
        <h2>new listings</h2>
      </div>
      <div className="listings__body main-body">
        <div className="scroll-container">
          <ul
            className="listings__list">
            {renderProducts(ProductTile, data)}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Listings;