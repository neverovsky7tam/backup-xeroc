import React from 'react';
import Select from '../Select/Select';
import { ReactComponent as ProductStar } from '../../../assets/img/product-star.svg';
import { ReactComponent as ProductHalfStar } from '../../../assets/img/product-half-star.svg';

const ProductList = ({ data }) => {
  const items = data.map((el, idx) => {
    let hashRange = null;
    let priceRange = null;

    if (el.hash.value.length > 1) {
      const lastPosition = el.hash.value.length - 1;
      hashRange = el.hash.value[0].h + ' - ' + el.hash.value[lastPosition].h;
      priceRange = el.hash.value[0].price + ' - ' + el.hash.value[lastPosition].price;
    } else {
      hashRange = el.hash.value[0].h;
      priceRange = el.hash.value[0].price;
    }

    const itemInner = React.createRef();

    return (
      <li className="products__item" key={idx}>
        <div className="products__item-inner" ref={itemInner}>
          <div className="products__item-header d-flex justify-content-between">
            <div className="products__item-header-left">
              <h5 className="poducts__item-title">{el.title}</h5>
              <span className="products__item-hash">{hashRange}</span>
            </div>
            <div className="products__item-star">
              {(!el.star) ? '' : (el.star === 'full') ? <ProductStar /> : <ProductHalfStar />}
            </div>
          </div>
          <div className="products__item-img" style={{ backgroundImage: `url("${el.img}")` }}></div>
          <div className="order">
            <div className="order__price-wrapper d-flex justify-content-between align-items-center">
              <span className="order__price">${priceRange}</span>
              <span className="order__psu">{el.psu && 'psu'}</span>
            </div>
            <Select item={itemInner} />
            <div className="order__btns-wrapper">
              <button className="order__btn-details">Details</button>
              <button className="order__btn-add">Add to cart</button>
            </div>
          </div>
        </div>
      </li>
    )
  })
  return items;
}

export default ProductList;
