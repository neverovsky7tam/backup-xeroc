import React from 'react';

const Ads = ({ item }) => {
  return (
    <li className="products__item-wrapper products__item-wrapper_mobile">
      <div className="item-holder item-holder_ads">
        <item.content />
      </div>
    </li>
  );
};

export default Ads;