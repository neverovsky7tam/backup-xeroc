import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWithdrawal } from '../../../store/actions';
import { MainBlockMob } from '../../BlocksUI/MainBlockMob';
import { ButtonMain } from '../../BlocksUI/Buttons/ButtonMain';
import { ReactComponent as USAFlagIcon } from '../../../assets/img/SideBar/usa-flag.svg';
import { ReactComponent as UpdateIcon } from '../../../assets/img/SideBar/update.svg';
import { ReactComponent as SellIcon } from '../../../assets/img/SideBar/sell-icon.svg';
import { ReactComponent as ToggleArrow } from '../../../assets/img/toggle-arrow.svg';
import { BoxDecor } from '../../Parts/BoxDecor';

let currentBlock = null;
let currentItem = null;

const WithdrawalList = ({ block }) => {
  const dispatch = useDispatch();

  let isBlockActive = false;

  const onClickItem = (e) => {
    const item = e.currentTarget;

    if (currentItem && currentItem !== item) {
      currentItem.classList.remove('item-active');
      currentItem.dataset.active = 0;

      if (currentItem.dataset.type === 'input') {
        currentItem.style = '';
        currentItem.firstElementChild.value = '';
        currentItem.firstElementChild.placeholder = 'Otherwise';
      };
    };

    if (currentItem === item && +item.dataset.active) isBlockActive = false;
    else isBlockActive = true;

    currentItem = item;

    let isActive = +currentItem.dataset.active;
    currentItem.dataset.active = (isActive) ? 0 : 1;
    currentItem.classList.toggle('item-active');

    if (!isActive) {
      const value = currentItem.firstElementChild.innerHTML.slice(1);
      dispatch(setWithdrawal(value));

      if (currentBlock && currentBlock !== block.current) {
        currentBlock.classList.remove('item-active');
      }
      currentBlock = block.current;
    } else {
      dispatch(setWithdrawal(0));
    }

    if (isBlockActive) block.current.classList.add('item-active');
    else {
      block.current.classList.remove('item-active');
      currentItem = null;
    }
  }

  const inputFocus = (e) => {
    const input = e.currentTarget;
    const inputWrapper = e.currentTarget.parentElement;

    if (currentItem) {
      currentItem.dataset.active = 0;
      currentItem.classList.remove('item-active');

      if (currentItem.dataset.type === 'input') {
        currentItem.style = '';
        currentItem.firstElementChild.value = '';
        currentItem.firstElementChild.placeholder = 'Otherwise';
      }
    };

    currentItem = inputWrapper;
    currentItem.style.background = 'rgba(255, 255, 255, 0.05)';
    input.placeholder = '';
    dispatch(setWithdrawal(0));
  };

  const inputBlur = () => {
    const prevInput = currentItem;
    setTimeout(() => {
      if (currentItem === currentItem && currentItem.firstElementChild.value) currentItem.classList.add('item-active');
      else {
        prevInput.style = '';
        prevInput.firstElementChild.value = '';
        prevInput.firstElementChild.placeholder = 'Otherwise';
      }
    }, 0);
  };

  const inputChange = (e) => {
    const value = e.target.value;
    let checkIsNan = false;

    if (isNaN(value)) {
      e.target.value = '';
      checkIsNan = true;
    }

    if (!checkIsNan) {
      currentItem.classList.add('item-active');
      dispatch(setWithdrawal(value));
    }

    if (!checkIsNan && !value) {
      currentItem.classList.remove('item-active');
      dispatch(setWithdrawal(0));
    }
  }

  return (
    <ul className="grid-template-2fr">
      <li className="decor-box">
        <div
          className="decor-box__inner"
          data-active="0"
          onClick={onClickItem}>
          <span>$200</span>
        </div>
        <BoxDecor />
      </li>
      <li className="decor-box">
        <div
          className="decor-box__inner"
          onClick={onClickItem}>
          <span>$500</span>
        </div>
        <BoxDecor />
      </li>
      <li className="decor-box">
        <div
          className="decor-box__inner"
          onClick={onClickItem}>
          <span>$1000</span>
        </div>
        <BoxDecor />
      </li>
      <li className="decor-box">
        <div
          className="decor-box__inner"
          data-type="input">
          <input
            type="text"
            placeholder='Otherwise'
            onFocus={inputFocus}
            onBlur={inputBlur}
            onChange={inputChange} />
        </div>
        <BoxDecor />
      </li>
    </ul>
  )
}

export const BalanceContent = () => {
  const [payPalList, setPayPalList] = useState(false);
  const [coinsList, setCoinsList] = useState(false);

  const payPalBlock = React.createRef();
  const coinsBlock = React.createRef();

  const payPalIsOpen = (payPalList) ? 'rotate(180deg)' : 'rotate(0)';
  const coinsIsOpen = (coinsList) ? 'rotate(180deg)' : 'rotate(0)';

  return (
    <>
      <h2>balance</h2>
      <div className="content" style={{ marginBottom: '30px' }}>
        <MainBlockMob
          icon={<USAFlagIcon className="social-icon__big" />}
          header={'$3500.55'}
          span={'Current balance'}
          actionIcon={<UpdateIcon className="update-icon" />} />
      </div>
      <div className="content" style={{ marginBottom: '15px' }}>
        <MainBlockMob
          ref={payPalBlock}
          icon={<SellIcon />}
          header={'PayPal'}
          span={'Withdrawal via'}
          actionIcon={<ToggleArrow style={{ transform: payPalIsOpen }} className="toggle-arrow" />}
          func={() => setPayPalList(!payPalList)} />
        {payPalList && <WithdrawalList block={payPalBlock} />}
      </div>
      <div className="content">
        <MainBlockMob
          ref={coinsBlock}
          icon={<SellIcon />}
          header={'CoinPayments'}
          span={'Withdrawal via'}
          actionIcon={<ToggleArrow style={{ transform: coinsIsOpen }} className="toggle-arrow" />}
          func={() => setCoinsList(!coinsList)} />
        {coinsList && <WithdrawalList block={coinsBlock} />}
      </div>
    </>
  );
};

export const BalanceBtn = () => {
  const withdrawal = useSelector((state) => state.withdrawal);

  const box = React.createRef();
  useEffect(() => {
    if (+withdrawal > 0) {
      box.current.classList.add('item-active');
      box.current.firstElementChild.classList.add('info-input_active');
    } else {
      box.current.classList.remove('item-active');
      box.current.firstElementChild.classList.remove('info-input_active');
    }
  });

  const inputChange = (e) => {
    e.currentTarget.value = '';
  };

  return (
    <div className="grid-template-2fr">
      <div className="decor-box">
        <div className="decor-box__inner" ref={box}>
          <input
            className="info-input"
            type="text"
            placeholder={`$${withdrawal}`}
            onChange={inputChange} />
        </div>
        <BoxDecor />
      </div>
      <ButtonMain
        text={'Withdrawal'} />
    </div>
  );
};