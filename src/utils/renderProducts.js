import React from 'react';
import Ads from 'pages/Home/modules/Ads';

const renderProducts = (ProductTemplate, data) => {
  const items = data.map((el, idx) => {
    if (el.type === 'banner') {
      return <Ads key={el.id} item={el} />
    } else {
      const itemLink = el.title.replace(/\.+/g, '').replace(/\s+/g, '-');
      const itemPath = `/product-details/${itemLink}/${el.id}`;

      const productProcess = productsProcessing(el);

      return <ProductTemplate
        key={idx}
        idx={idx}
        item={el}
        itemHash={productProcess.hash}
        itemPrice={productProcess.price}
        hashArr={productProcess.hashArr}
        itemPath={itemPath} />
    };
  });

  return items;
};

export default renderProducts;

export const productsProcessing = (el) => {
  let hash = null;
  let price = null;

  const priceRangeArr = [];
  const hashArr = el.hash.value;

  if (hashArr.length > 1) {
    hashArr.forEach((item) => {
      priceRangeArr.push(+item.price);
    });

    hashArr.sort((a, b) => a.h - b.h);
    priceRangeArr.sort((a, b) => a - b);

    hash = `${hashArr[0].h} - ${hashArr[hashArr.length - 1].h}`;
    price = `$${priceRangeArr[0]} - $${priceRangeArr[priceRangeArr.length - 1]}`;
  } else {
    hash = `${hashArr[0].h}`;
    price = `$${hashArr[0].price}`;
  };

  return {
    hash,
    price,
    hashArr,
  };
};
