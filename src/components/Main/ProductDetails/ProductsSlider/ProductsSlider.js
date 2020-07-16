import React from 'react';
import { useSelector } from 'react-redux';
import renderProducts from '../../../../utils/renderProducts';
import ProductTile from '../../../OnSale/ProductTile';
import ProductTileMobile from '../../../../components/OnSale/ProductTileMobile';

const ProductsSlider = React.forwardRef(({ items }, itemsWrapper) => {
  const isMobile = useSelector((state) => state.deviceType);

  if (isMobile) {
    return (
      <div className="products-slider-mob">
        <ul className="products-slider">
          {renderProducts(ProductTileMobile, items)}
        </ul>
      </div>
    )
  } else {
    return (
      <ul
        className="products-slider"
        style={{ gridTemplateColumns: `repeat(${items.length}, 213px)` }}
        ref={itemsWrapper}>
        {renderProducts(ProductTile, items)}
      </ul>
    );
  }
});

export default ProductsSlider;