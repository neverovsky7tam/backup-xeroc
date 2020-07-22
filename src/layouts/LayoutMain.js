import React from 'react';
import { useSelector } from 'react-redux';
import PageTop from 'mod/PageTop';
import Filters from 'components/Filters/Filters';
import Listings from 'mod/Listings';
import News from 'mod/News';

const LayoutMain = ({ children }) => {
  const isMobile = useSelector((state) => state.deviceType);
  // const pageTopContent = (isMobile) ? true : false;
  // const isCloseCross = (isMobile) ? true : false;

  if (isMobile) {
    let wrapperClass = 'wrapper-mob';
    if (children.type.name === 'OnSale') wrapperClass = 'home-mob';

    return (
      <>
        <PageTop />
        <div className={wrapperClass}>
          {children}
        </div>
      </>
    );
  } else {
    return (
      <div className="general">
        <Filters />
        <section className="general__center">
          {children}
        </section>
        <Listings />
        <News />
      </div>
    );
  };
};

export default LayoutMain;