import React from 'react';
import { useDispatch } from 'react-redux';
import { MainBlockMob } from '../../BlocksUI/MainBlockMob';
import { ButtonMain } from '../../BlocksUI/Buttons/ButtonMain';
import { setAccountMenu } from '../../../store/actions';
import { ReactComponent as Arrow } from '../../../assets/img/SideBar/arrow-white-right.svg';
import { ReactComponent as SellIcon } from '../../../assets/img/SideBar/sell-icon.svg';
import { ReactComponent as SellHistoryIcon } from '../../../assets/img/SideBar/Account/sell-history.svg';
import { ReactComponent as HistoryIcon } from '../../../assets/img/SideBar/Account/history.svg';
import { ReactComponent as ReportIcon } from '../../../assets/img/SideBar/Account/report.svg';
import { ReactComponent as VerificationIcon } from '../../../assets/img/SideBar/Account/verification.svg';
import { ReactComponent as SecurityIcon } from '../../../assets/img/SideBar/Account/security.svg';
import { ReactComponent as SettingsIcon } from '../../../assets/img/SideBar/Account/settings.svg';
import { ReactComponent as GetPaidIcon } from '../../../assets/img/SideBar/Account/get-paid.svg';
import { ReactComponent as SellerChatIcon } from '../../../assets/img/SideBar/Account/seller-chat.svg';

export const AccountContent = () => {
  return (
    <>
      <h2>dashboard</h2>
      <div className="content">
        <MainBlockMob
          icon={<SellIcon />}
          header={'Sell'}
          span={'3 items on sale'}
          actionIcon={<Arrow />} />
        <MainBlockMob
          icon={<SellHistoryIcon />}
          header={'Sale history'}
          span={'Total 7 items sold'}
          actionIcon={<Arrow />} />
        <MainBlockMob
          icon={<HistoryIcon />}
          header={'Purchase history'}
          span={'Last bouth for $500'}
          actionIcon={<Arrow />} />
        <MainBlockMob
          icon={<ReportIcon />}
          header={'Statistic report'}
          span={'Latest report for August 7th'}
          actionIcon={<Arrow />} />
      </div>
      <h2>profile</h2>
      <div className="content">
        <MainBlockMob
          icon={<VerificationIcon />}
          header={'Account verification'}
          span={'There are 1 issue'}
          actionIcon={<Arrow />} />
        <MainBlockMob
          icon={<SecurityIcon />}
          header={'Account security'}
          span={'No security issues'}
          actionIcon={<Arrow />} />
        <MainBlockMob
          icon={<SettingsIcon />}
          header={'Notification setings'}
          span={'Change options'}
          actionIcon={<Arrow />} />
        <MainBlockMob
          icon={<GetPaidIcon />}
          header={'Get paid'}
          span={'Add payout method'}
          actionIcon={<Arrow />} />
        <MainBlockMob
          icon={<SellerChatIcon />}
          header={'Seller chat'}
          span={'Send a message'}
          actionIcon={<Arrow />}
          style={{ marginBottom: '0' }} />
      </div>
    </>
  );
};

export const AccountBtn = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(setAccountMenu(false));
  }

  return (
    <ButtonMain
      text={'Log out'}
      func={logOut} />
  );
};