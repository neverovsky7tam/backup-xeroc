import React from 'react';
import { useSelector } from 'react-redux';
import TopSellers from 'components/TopSellers';
import { Diamond } from 'components/Parts/Parts';
import { CloseIcon } from 'svg/svg';

const FeedbackPopup = React.forwardRef(({ hidePop }, ref) => {
  const lang = useSelector((state) => state.langObj.footer);
  return (
    <div
      className="drop-menu"
      ref={ref}
      onMouseLeave={() => hidePop(ref, '')}>
      <div className="drop-menu__inner">
        <div className="drop-menu__header">
          <h4>{lang.sellersTitle}</h4>
          <span className="cursor-pointer">{CloseIcon}</span>
        </div>
        <TopSellers />
        <Diamond custom={{ right: '77%' }} />
      </div>
    </div>
  )
});

export default FeedbackPopup;