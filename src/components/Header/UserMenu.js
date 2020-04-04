import React from 'react';
import { BoxDecor } from '../Parts/BoxDecor';
import { Diamond } from '../Parts/Parts';
import { ReactComponent as UserIcon } from '../../assets/img/Header/user-icon.svg';
import { ReactComponent as BalanceIcon } from '../../assets/img/Header/balance-icon.svg';
import { ReactComponent as ArrowDropdownMenu } from '../../assets/img/Header/arrow-dropdown-menu.svg';
import { ReactComponent as MenuSeparate } from '../../assets/img/Header/menu-separate.svg';
import { ReactComponent as BellIcon } from '../../assets/img/Header/bell-icon.svg';
import { ReactComponent as VectorStar } from '../../assets/img/vector-star.svg';
import { ReactComponent as CloseIcon } from '../../assets/img/close.svg';
import { ReactComponent as VisaIcon } from '../../assets/img/Cart/visa.svg';
import { ReactComponent as MastercardIcon } from '../../assets/img/Cart/master-card.svg';
import { ReactComponent as PaypalIcon } from '../../assets/img/Cart/paypal.svg';
import { ReactComponent as CoinpaymentsIcon } from '../../assets/img/Cart/coinpayments.svg';
import { ReactComponent as SkrillIcon } from '../../assets/img/Cart/skrill.svg';
import { ReactComponent as WebmoneyIcon } from '../../assets/img/Cart/webmoney.svg';
import { ReactComponent as AlipayIcon } from '../../assets/img/Cart/alipay.svg';

const UserMenu = () => {
  const accountPop = React.createRef();
  const notifyPop = React.createRef();
  const balancePop = React.createRef();

  const onHover = (element, action) => {
    element.current.style.display = action;
  }

  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div
        className="user-menu__account d-flex align-items-center p-relative"
        onMouseEnter={() => onHover(accountPop, 'block')}>
        <UserIcon />
        <span className="user-menu__my-account">my account</span>
        <ArrowDropdownMenu className="cursor-pointer" />
        <div
          className="user-menu__account-hover"
          onMouseLeave={() => onHover(accountPop, '')}
          ref={accountPop}>
          <div className="user-menu__account-hover-content">
            <nav>
              <a href="#" onClick={handleClick}>Profile settings</a>
              <a href="#" onClick={handleClick}>Dashboard</a>
              <a href="#" onClick={handleClick}>Notification updates</a>
            </nav>
            <BoxDecor />
          </div>
        </div>
      </div>
      <MenuSeparate className="user-menu__separate" />
      <div
        className="user-menu__notify"
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
              <button className="drop-menu__btn">
                Show all
                <BoxDecor />
              </button>
            </div>
            <Diamond />
          </div>
        </div>
      </div>
      <MenuSeparate className="user-menu__separate" />
      <div
        className="user-menu__balance"
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
                <li className="list__item-margin-r-b">
                  <div className="list__item-inner">
                    <VisaIcon /><MastercardIcon />
                  </div>
                  <BoxDecor />
                </li>
                <li className="list__item-margin-r-b">
                  <div className="list__item-inner">
                    <PaypalIcon />
                  </div>
                  <BoxDecor />
                </li>
                <li className="list__item-margin-b">
                  <div className="list__item-inner">
                    <CoinpaymentsIcon />
                  </div>
                  <BoxDecor />
                </li>
                <li className="list__item-margin-r">
                  <div className="list__item-inner">
                    <SkrillIcon />
                  </div>
                  <BoxDecor />
                </li>
                <li className="list__item-margin-r">
                  <div className="list__item-inner">
                    <WebmoneyIcon />
                  </div>
                  <BoxDecor />
                </li>
                <li>
                  <div className="list__item-inner">
                    <AlipayIcon />
                  </div>
                  <BoxDecor />
                </li>
              </ul>
            </div>
            <div className="drop-menu__footer">
              <button className="drop-menu__footer-btn">
                Withdraw
                <BoxDecor />
              </button>
            </div>
            <Diamond />
          </div>
        </div>
      </div>
    </>
  )
}

export default UserMenu;
