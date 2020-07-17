import React from 'react';
import { BoxDecor } from 'components/Parts/BoxDecor';

const Ads = ({ item }) => {
  return (
    <li className="products__item-wrapper products__item-wrapper_mobile">
      <div className="item-holder item-holder_ads">
        <item.content />
        <BoxDecor />
      </div>
    </li>
  );
};

export default Ads;