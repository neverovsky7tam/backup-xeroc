import React, { useState } from 'react';
import { MainBlockMob } from '../../BlocksUI/MainBlockMob';
import { ButtonMain } from '../../BlocksUI/Buttons/ButtonMain';
import { ReactComponent as USAFlagIcon } from '../../../assets/img/SideBar/usa-flag.svg';
import { ReactComponent as UpdateIcon } from '../../../assets/img/SideBar/update.svg';
import { ReactComponent as SellIcon } from '../../../assets/img/SideBar/sell-icon.svg';
import { ReactComponent as Arrow } from '../../../assets/img/SideBar/arrow-white-right.svg';
import { BoxDecor } from '../../Parts/BoxDecor';

export const BalanceContent = () => {
  const [payPalList, setPayPalList] = useState(false);
  const [coinsList, setCoinsList] = useState(false);

  return (
    <>
      <h2>balance</h2>
      <div className="content" style={{ marginBottom: '30px' }}>
        <MainBlockMob
          icon={<USAFlagIcon />}
          header={'$3500.55'}
          span={'Current balance'}
          actionIcon={<UpdateIcon />} />
      </div>
      <div className="content" style={{ marginBottom: '15px' }}>
        <MainBlockMob
          icon={<SellIcon />}
          header={'PayPal'}
          span={'Withdrawal via'}
          actionIcon={<Arrow style={{ transform: 'rotate(90deg)' }} />} />
        {
          true &&
          <ul className="list-decor">
            <li className="list-decor__item"><span>$200</span></li>
            <li className="list-decor__item"><span>$500</span></li>
            <li className="list-decor__item"><span>$1000</span></li>
            <li className="list-decor__item">
              <input
                type="text"
                placeholder='Otherwise' />
            </li>
          </ul>
        }
      </div>
      <div className="content">
        <MainBlockMob
          icon={<SellIcon />}
          header={'CoinPayments'}
          span={'Withdrawal via'}
          actionIcon={<Arrow style={{ transform: 'rotate(90deg)' }} />} />
      </div>
    </>
  );
};

export const BalanceBtn = () => {
  return (
    <>
      <div className="shown-data-block" style={{ marginRight: '15px' }}>
        <div className="shown-data-block__inner">
          <span className="span-mob">bla-bla</span>
        </div>
        <BoxDecor />
      </div>
      <ButtonMain
        text={'Withdrawal'} />
    </>
  );
};