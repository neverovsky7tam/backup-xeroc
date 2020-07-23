import React from 'react';
import Filters from 'mod/Filters';
import Listings from 'mod/Listings';
import News from 'mod/News';

const LayoutMainDT = ({children}) => {
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

export default LayoutMainDT;