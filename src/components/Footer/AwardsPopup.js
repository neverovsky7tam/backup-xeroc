import React from 'react';
import { useSelector } from 'react-redux';
import { Diamond } from 'components/Parts/Parts';
import { BoxDecor } from 'components/Parts/BoxDecor';

const AwardsPopup = React.forwardRef(({ diamondRight, icon, onHover }, ref) => {
  const lang = useSelector((state) => state.langObj.footer);
  return (
    <div
      className="drop-menu"
      ref={ref}>
      <div
        className="drop-menu__inner"
        onMouseLeave={() => onHover(ref, '')}>
        <div className="drop-menu__awards-inner">
          {icon}
          <h6 className="awards-title">{lang.awardsTitle}</h6>
          <p>Lorem ipsum dolor sit amet conse adipisicing</p>
        </div>
        <Diamond custom={diamondRight} />
        <BoxDecor />
      </div>
    </div>
  )
});

export default AwardsPopup;