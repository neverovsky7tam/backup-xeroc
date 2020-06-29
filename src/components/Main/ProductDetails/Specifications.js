import React from 'react';
import { BoxDecor } from '../../Parts/BoxDecor';
import { ReactComponent as ManufacturerIcon } from '../../../assets/img/Product_details/Specifications/manufacturer.svg';

const Specifications = ({ item }) => {
  const specBulet = ['Manufacturer', 'Model', 'Hash Rate', 'Size', 'Weight', 'Noise Level', 'Fans', 'Power', 'Interface', 'Temperature', 'Humidity', 'Release', 'Algorithm', 'Efficiency', 'Voltage'];

  const renderItems = () => {
    const items = specBulet.map((el) => {
      let icon = <ManufacturerIcon />;
      // if (el === 'Manufacturer') {

      // }

      return (
        <li className="specification__item">
          <div className="icon-holder">{icon}</div>
          <div className="specs">
            <span className="specs__name">Hello</span>
            <span className="specs__value">world</span>
          </div>
        </li>
      );
    });

    if (items.lenght % 2 !== 0) {
      const blockPlug = (
        <li className="specification__item"></li>
      );
      items.push(blockPlug);
    };
    return items;
  };

  return (
    <div className="specification">
      <ul className="specification__list">
        {renderItems()}
      </ul>
      <BoxDecor />
    </div>
  );
};

export default Specifications;