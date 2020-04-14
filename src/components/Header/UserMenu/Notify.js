import React from 'react';
import { hideDecor } from '../../Parts/BoxDecor';
import { BoxDecor } from '../../Parts/BoxDecor';
import { Diamond } from '../../Parts/Parts';
import { ReactComponent as BellIcon } from '../../../assets/img/Header/notification.svg';
import { ReactComponent as VectorStar } from '../../../assets/img/vector-star.svg';

const Notify = ({ onHover }) => {
  const notifyPop = React.createRef();
  const boxDecor = React.createRef();

  return (
    <div
      className="user-menu__notify d-flex"
      onMouseEnter={() => onHover(notifyPop, 'block')}>
      <BellIcon className="cursor-pointer" />
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
              <span className="drop-menu__notify-item-icon"><VectorStar /></span>
              <span className="drop-menu__notify-item-text">You have 1 new feedback</span>
            </div>
          </div>
          <div className="drop-menu__btn-wrapper">
            <button
              className="drop-menu__notify-btn"
              onMouseEnter={() => hideDecor(boxDecor, 'none')}
              onMouseLeave={() => hideDecor(boxDecor, '')}>
              Show all
            <BoxDecor ref={boxDecor} />
            </button>
          </div>
          <Diamond />
        </div>
      </div>
    </div>
  )
}

export default Notify;