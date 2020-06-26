import React from 'react';
import { ReactComponent as Arrow } from '../../../../assets/img/toggle-arrow.svg';
import { ReactComponent as CloseIcon } from '../../../../assets/img/Product_details/close.svg';

const Controls = () => {
  return (
    <div className="pdp-controls">
      <nav>
        <button>
          <Arrow className="toggle-arrow arrow-left" />
          <span>prv</span>
        </button>
        <span>&nbsp;/&nbsp;</span>
        <button>
          <span>nxt</span>
          <Arrow className="toggle-arrow arrow-right" />
        </button>
      </nav>
      <button className="pdp-close-btn">
        <span className="pdp-close-btn__txt">close</span>
        <CloseIcon />
      </button>
    </div>
  );
};

export default Controls;