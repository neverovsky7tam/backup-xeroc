import React from 'react';
import { useSelector } from 'react-redux';
import OnSale_MB from './OnSale_MB';
import OnSale_DT from './OnSale_DT';

const OnSale = ({ item, currentHash, setCurrentHash }) => {
  const isMobile = useSelector((state) => state.deviceType);

  if (isMobile) return <OnSale_MB item={item} currentHash={currentHash} setCurrentHash={setCurrentHash} />
  else return <OnSale_DT item={item} currentHash={currentHash} setCurrentHash={setCurrentHash} />
};

export default OnSale;