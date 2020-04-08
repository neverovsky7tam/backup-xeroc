import React from 'react';
import { hideDecor } from '../../Parts/BoxDecor';
import { BoxDecor } from '../../Parts/BoxDecor';
import { Diamond } from '../../Parts/Parts';
import { ReactComponent as BalanceIcon } from '../../../assets/img/Header/balance-icon.svg';
import { ReactComponent as CloseIcon } from '../../../assets/img/close.svg';
import { ReactComponent as VisaIcon } from '../../../assets/img/Cart/visa.svg';
import { ReactComponent as MastercardIcon } from '../../../assets/img/Cart/master-card.svg';
import { ReactComponent as PaypalIcon } from '../../../assets/img/Cart/paypal.svg';
import { ReactComponent as CoinpaymentsIcon } from '../../../assets/img/Cart/coinpayments.svg';
import { ReactComponent as SkrillIcon } from '../../../assets/img/Cart/skrill.svg';
import { ReactComponent as WebmoneyIcon } from '../../../assets/img/Cart/webmoney.svg';
import { ReactComponent as AlipayIcon } from '../../../assets/img/Cart/alipay.svg';

const Balance = ({ onHover }) => {
  const boxDecor = React.createRef();
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
      <span>balance</span>
      <span className="user-menu__balance-currency">$</span>
      <span className="user-menu__balance-value">650</span>
      <div
        className="drop-menu"
        onMouseLeave={() => onHover(balancePop, '')}
        ref={balancePop}>
        <div className="drop-menu__inner">
          <div className="drop-menu__header">
            <h4>Balance <span>$</span>650</h4>
            <CloseIcon className="cursor-pointer" />
          </div>
          <div className="drop-menu__box">
            <ul className="list">
              <li className="list__item list__item_margin-r-b" onClick={activeItem}>
                <div className="list__item-inner">
                  <VisaIcon /><MastercardIcon />
                </div>
                <BoxDecor />
              </li>
              <li className="list__item list__item_margin-r-b" onClick={activeItem}>
                <div className="list__item-inner">
                  <PaypalIcon />
                </div>
                <BoxDecor />
              </li>
              <li className="list__item list__item_margin-b" onClick={activeItem}>
                <div className="list__item-inner">
                  <CoinpaymentsIcon />
                </div>
                <BoxDecor />
              </li>
              <li className="list__item list__item_margin-r" onClick={activeItem}>
                <div className="list__item-inner">
                  <SkrillIcon />
                </div>
                <BoxDecor />
              </li>
              <li className="list__item list__item_margin-r" onClick={activeItem}>
                <div className="list__item-inner">
                  <WebmoneyIcon />
                </div>
                <BoxDecor />
              </li>
              <li className="list__item" onClick={activeItem}>
                <div className="list__item-inner">
                  <AlipayIcon />
                </div>
                <BoxDecor />
              </li>
            </ul>
          </div>
          <div className="drop-menu__footer">
            <button
              className="drop-menu__footer-btn"
              onMouseEnter={() => hideDecor(boxDecor, 'none')}
              onMouseLeave={() => hideDecor(boxDecor, '')}>
              Withdraw
            <BoxDecor ref={boxDecor} />
            </button>
          </div>
          <Diamond />
        </div>
      </div>
    </div>
  )
}

export default Balance;