import React from 'react';
import { ButtonDark } from 'components/BlocksUI/Buttons/Buttons';
import { BoxDecor } from 'components/Parts/BoxDecor';
import { Diamond } from 'components/Parts/Parts';
import { BalanceIcon } from 'svg/svgHeader';
import { CloseIcon } from 'svg/svg';
import {
  VisaIcon,
  MastercardIcon,
  PaypalIcon,
  CoinpaymentsIcon,
  SkrillIcon,
  WebmoneyIcon,
  AlipayIcon
} from 'svg/svgCart';

const Balance = ({ onHover }) => {
  const balancePop = React.createRef();

  let currentActiveItem = null;
  const activeItem = (e) => {
    const item = e.target.closest('.list__item');
    if (item === currentActiveItem) {
      item.classList.toggle('list-item_active');
    } else {
      item.classList.add('list-item_active');
      if (currentActiveItem) {
        currentActiveItem.classList.remove('list-item_active');
      }
      currentActiveItem = item;
    }
  }

  return (
    <div
      className="user-menu__balance line-height-8"
      onMouseEnter={() => onHover(balancePop, 'block')}>
      <BalanceIcon className="icon-balance cursor-pointer" />
      <div className="responsive-1919">
        <span>balance</span>
        <span className="user-menu__balance-currency">$</span>
        <span className="user-menu__balance-value">650</span>
      </div>
      <div
        className="drop-menu"
        onMouseLeave={() => onHover(balancePop, '')}
        ref={balancePop}>
        <div className="drop-menu__inner">
          <div className="drop-menu__header">
            <h4>Balance <span>$</span>650</h4>
            <span className="cursor-pointer">{CloseIcon}</span>
          </div>
          <div className="drop-menu__box">
            <ul className="list">
              <li className="list__item list__item_margin-r-b" onClick={activeItem}>
                <div className="list__item-inner">
                  {VisaIcon}{MastercardIcon}
                </div>
                <BoxDecor />
              </li>
              <li className="list__item list__item_margin-r-b" onClick={activeItem}>
                <div className="list__item-inner">
                  {PaypalIcon}
                </div>
                <BoxDecor />
              </li>
              <li className="list__item list__item_margin-b" onClick={activeItem}>
                <div className="list__item-inner">
                  {CoinpaymentsIcon}
                </div>
                <BoxDecor />
              </li>
              <li className="list__item list__item_margin-r" onClick={activeItem}>
                <div className="list__item-inner">
                  {SkrillIcon}
                </div>
                <BoxDecor />
              </li>
              <li className="list__item list__item_margin-r" onClick={activeItem}>
                <div className="list__item-inner">
                  {WebmoneyIcon}
                </div>
                <BoxDecor />
              </li>
              <li className="list__item" onClick={activeItem}>
                <div className="list__item-inner">
                  {AlipayIcon}
                </div>
                <BoxDecor />
              </li>
            </ul>
          </div>
          <div className="drop-menu__footer">
            <ButtonDark
              text={'Withdraw'}
              func={null}
              wrapperStyle={{ width: '84px' }} />
          </div>
          <Diamond />
        </div>
      </div>
    </div>
  )
}

export default Balance;