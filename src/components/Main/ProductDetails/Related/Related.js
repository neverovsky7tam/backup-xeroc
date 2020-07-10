import React from 'react';
import { useSelector } from 'react-redux';
import { sortedProducts } from '../../../../data/productsProcessing';
import renderProducts from '../../../../utils/renderProducts';
import ProductTile from '../../OnSale/ProductTile';
import ProductTileMobile from '../../OnSale/ProductTileMobile';

const Related = React.forwardRef(({ item }, relatedItemsWrapper) => {
  console.log('rel', item);
  const isMobile = useSelector((state) => state.deviceType);
  //console.log('sortedProducts', sortedProducts);
  const relatedValue = item.manufacturer;
  //console.log('relatedValue', relatedValue);
  const relatedProductsRaw = Object.values(sortedProducts.manufacturer[relatedValue]);
  const relatedProducts = relatedProductsRaw.filter((el) => el.id !== item.id);

  if (isMobile) {
    const item = [relatedProducts[0]];
    return (
      <div className="related-wrapper">
        <ul className="related">
          {renderProducts(ProductTileMobile, item)}
        </ul>
      </div>
    )
  } else {
    return (
      <ul
        className="related"
        style={{ gridTemplateColumns: `repeat(${relatedProducts.length}, 213px)` }}
        ref={relatedItemsWrapper}>
        {renderProducts(ProductTile, relatedProducts)}
      </ul>
    );
  }
});

export default Related;
