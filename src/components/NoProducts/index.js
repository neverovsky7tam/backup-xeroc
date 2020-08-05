import React from 'react';
import { ButtonMain } from 'components/BlocksUI/Buttons/Buttons';
import { BoxDecor } from 'components/Parts/BoxDecor';
import { NotFound } from 'svg/svg';

const NoProducts = ({ view }) => {
  if (view) {
    return (
      <div className="no-products">
        <div className="content-inner">
          <div className="content-body main-font">
            <div>
              <div className="title">No results</div>
              <div className="main-line-height">Please consider other options</div>
            </div>
            <div className="center-block">
              {NotFound}
            </div>
            <div className="btn-holder">
              <ButtonMain
                text={'Remove all filters'}
                func={null} />
            </div>
          </div>
          <BoxDecor />
        </div>
      </div>
    );
  } else {
    return (
      <div className="no-products-list">
        <div className="content-inner">
          <div className="content-body">
            <div className="icon-holder">{NotFound}</div>
            <p className="main-font">
              No results. Please consider other options.
            </p>
          </div>
          <BoxDecor />
        </div>
        <ButtonMain
          text={'Remove all filters'}
          style={{ height: '100%' }}
          func={null} />
      </div>
    );
  };
};

export default NoProducts;