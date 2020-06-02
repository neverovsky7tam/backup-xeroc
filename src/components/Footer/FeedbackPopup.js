import React from 'react';
import { useSelector } from 'react-redux';
import TopSellers from '../Shared/TopSellers';
import { ReactComponent as CloseIcon } from '../../assets/img/close.svg';
import { Diamond } from '../Parts/Parts';

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
          <CloseIcon className="cursor-pointer" />
        </div>
        <TopSellers />
        <Diamond custom={{ right: '77%' }} />
      </div>
    </div>
  )
});

export default FeedbackPopup;