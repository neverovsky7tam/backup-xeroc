import React from 'react';
import { ButtonDark } from 'components/BlocksUI/Buttons/Buttons';
import { Diamond } from 'components/Parts/Parts';
import { BellIcon } from 'svg/svgHeader';
import { VectorStar } from 'svg/svg';

const Notify = ({ onHover }) => {
  const notifyPop = React.createRef();

  return (
    <div
      className="user-menu__notify d-flex"
      onMouseEnter={() => onHover(notifyPop, 'block')}>
      <div className="cursor-pointer d-flex">{BellIcon}</div>
      <div
        className="drop-menu"
        onMouseLeave={() => onHover(notifyPop, '')}
        ref={notifyPop}>
        <div className="drop-menu__inner">
          <div className="drop-menu__header">
            <h4>Last notifications</h4>
            <a className="drop-menu__link" href="#">Settings</a>
          </div>
          <div className="drop-menu__box">
            <div className="drop-menu__notify-wrapper">
              <span className="drop-menu__notify-item-icon">{VectorStar}</span>
              <span className="drop-menu__notify-item-text">You have 1 new feedback</span>
            </div>
          </div>
          <div className="drop-menu__btn-wrapper">
            <ButtonDark
              text={'Show all'}
              wrapperStyle={{ width: '84px', margin: 'auto', }} />
          </div>
          <Diamond />
        </div>
      </div>
    </div>
  )
}

export default Notify;