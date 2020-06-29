import React, { useEffect } from 'react';
import { BoxDecor } from '../../Parts/BoxDecor';
import { ReactComponent as ManufacturerIcon } from '../../../assets/img/Product_details/Specifications/manufacturer.svg';
import { ReactComponent as AlgorithmIcon } from '../../../assets/img/Product_details/Specifications/algorithm.svg';
import { ReactComponent as EfficiencyIcon } from '../../../assets/img/Product_details/Specifications/efficiency.svg';
import { ReactComponent as FansIcon } from '../../../assets/img/Product_details/Specifications/fans.svg';
import { ReactComponent as HashIcon } from '../../../assets/img/Product_details/Specifications/hash-rate.svg';
import { ReactComponent as HumidityIcon } from '../../../assets/img/Product_details/Specifications/humidity.svg';
import { ReactComponent as InterfaceIcon } from '../../../assets/img/Product_details/Specifications/interface.svg';
import { ReactComponent as ModelIcon } from '../../../assets/img/Product_details/Specifications/model.svg';
import { ReactComponent as NoiseIcon } from '../../../assets/img/Product_details/Specifications/noise-level.svg';
import { ReactComponent as PowerIcon } from '../../../assets/img/Product_details/Specifications/power.svg';
import { ReactComponent as ReleaseIcon } from '../../../assets/img/Product_details/Specifications/release.svg';
import { ReactComponent as SizeIcon } from '../../../assets/img/Product_details/Specifications/size.svg';
import { ReactComponent as TemperatureIcon } from '../../../assets/img/Product_details/Specifications/temperature.svg';
import { ReactComponent as VoltageIcon } from '../../../assets/img/Product_details/Specifications/voltage.svg';
import { ReactComponent as WeightIcon } from '../../../assets/img/Product_details/Specifications/weight.svg';

const Specifications = ({ item }) => {
  const specBullet = ['Manufacturer', 'Model', 'Hash Rate', 'Size', 'Weight', 'Noise Level', 'Fans', 'Power', 'Interface', 'Temperature', 'Humidity', 'Release', 'Algorithm', 'Efficiency', 'Voltage'];

  const renderItems = () => {
    const items = specBullet.map((el, idx) => {
      let icon = null;
      let value = null;
      if (el === 'Manufacturer') {
        icon = <ManufacturerIcon />;
        value = item.manufacturer;
      };
      if (el === 'Model') {
        icon = <ModelIcon />;
        value = item.model;
      };
      if (el === 'Hash Rate') {
        icon = <HashIcon />;
        value = item.hash.value.map((el) => {
          return el.h;
        }).join(', ');
        if ((document.documentElement.clientWidth < 768) && (value.length > 10)) value = value.slice(0, 10) + ' ...';
      };
      if (el === 'Size') {
        icon = <SizeIcon />;
        value = '135x128x250';
      };
      if (el === 'Weight') {
        icon = <WeightIcon />;
        value = '4200g';
      };
      if (el === 'Noise Level') {
        icon = <NoiseIcon />;
        value = item.noise;
      };
      if (el === 'Fans') {
        icon = <FansIcon />;
        value = '2';
      };
      if (el === 'Power') {
        icon = <PowerIcon />;
        value = item.power;
      };
      if (el === 'Interface') {
        icon = <InterfaceIcon />;
        value = 'Internet';
      };
      if (el === 'Temperature') {
        icon = <TemperatureIcon />;
        value = '0-40';
      };
      if (el === 'Humidity') {
        icon = <HumidityIcon />;
        value = '5-95%';
      };
      if (el === 'Release') {
        icon = <ReleaseIcon />;
        value = item.release;
      };
      if (el === 'Algorithm') {
        icon = <AlgorithmIcon />;
        value = item.algorithm;
      };
      if (el === 'Efficiency') {
        icon = <EfficiencyIcon />;
        value = item.efficiency;
      };
      if (el === 'Voltage') {
        icon = <VoltageIcon />;
        value = '-';
      };

      return (
        <li className="specification__item" key={idx}>
          <div className="icon-holder">{icon}</div>
          <div className="specs">
            <span className="specs__name">{el}</span>
            <span className="specs__value">{value}</span>
          </div>
        </li>
      );
    });

    if ((items.lenght % 2 !== 0) && (document.documentElement.clientWidth >= 425)) {
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