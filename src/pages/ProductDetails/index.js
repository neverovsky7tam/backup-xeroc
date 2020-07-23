import React from 'react';
import { useParams, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import LayoutMain from 'layouts/LayoutMain';
import ProductDetailsMB from './ProductDetailsMB';
import ProductDetailsDT from './ProductDetailsDT';
import { productsObj } from 'data/productsData';

const ProductDetails = () => {
  const { id } = useParams();
  const { pathname } = useLocation();

  const currentItem = productsObj.find((el) => el.id === +id);
  let itemIndex = productsObj.findIndex((el) => el.id === +id);

  const processItemLink = (item) => {
    return item.title.replace(/\.+/g, '').replace(/\s+/g, '-');
  };

  let prevItem = null;
  let nextItem = null;
  let prevLink = null;
  let nextLink = null;
  let prevPath = null;
  let nextPath = null;

  if (itemIndex === 0) {
    prevPath = pathname;
  } else {
    prevItem = productsObj[itemIndex - 1];
    prevLink = processItemLink(prevItem);
    prevPath = `/product-details/${prevLink}/${prevItem.id}`;
  };

  if (itemIndex === productsObj.length - 1) {
    nextPath = pathname;
  } else {
    nextItem = productsObj[itemIndex + 1];
    nextLink = processItemLink(nextItem);
    nextPath = `/product-details/${nextLink}/${nextItem.id}`;
  };

  const links = {
    prevPath,
    nextPath,
  }

  const isMobile = useSelector((state) => state.deviceType);

  return (
    <LayoutMain>
      {(isMobile) ?
        <ProductDetailsMB item={currentItem} />
        : <ProductDetailsDT item={currentItem} links={links} />}
    </LayoutMain>
  );
};

export default ProductDetails;