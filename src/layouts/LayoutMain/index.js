import React from 'react';
import { useSelector } from 'react-redux';
import LayoutMainMB from './LayoutMainMB';
import LayoutMainDT from './LayoutMainDT';

const LayoutMain = ({ children }) => {
  const isMobile = useSelector((state) => state.deviceType);

  if (isMobile) return <LayoutMainMB children={children} />
  else return <LayoutMainDT children={children} />
};

export default LayoutMain;