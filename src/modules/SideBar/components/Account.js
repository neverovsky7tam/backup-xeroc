import React from 'react';
import { useDispatch } from 'react-redux';
import { MainBlockMob } from 'components/BlocksUI/MainBlockMob';
import { ButtonMain } from 'components/BlocksUI/Buttons/Buttons';
import { setAccountMenu } from 'store/actions';
import { ToggleArrow } from 'svg/svg';
import {
  SellIcon,
  SellHistoryIcon,
  HistoryIcon,
  ReportIcon,
  VerificationIcon,
  SecurityIcon,
  SettingsIcon,
  GetPaidIcon,
  SellerChatIcon
} from 'svg/svgSideBar';

export const AccountContent = () => {
  return (
    <>
      <h2>dashboard</h2>
      <div className="content">
        <MainBlockMob
          icon={SellIcon}
          header={'Sell'}
          span={'3 items on sale'}
          actionIcon={<span className="toggle-arrow toggle-arrow_right">{ToggleArrow}</span>} />
        <MainBlockMob
          icon={SellHistoryIcon}
          header={'Sale history'}
          span={'Total 7 items sold'}
          actionIcon={<span className="toggle-arrow toggle-arrow_right">{ToggleArrow}</span>} />
        <MainBlockMob
          icon={HistoryIcon}
          header={'Purchase history'}
          span={'Last bouth for $500'}
          actionIcon={<span className="toggle-arrow toggle-arrow_right">{ToggleArrow}</span>} />
        <MainBlockMob
          icon={ReportIcon}
          header={'Statistic report'}
          span={'Latest report for Aug 7th'}
          actionIcon={<span className="toggle-arrow toggle-arrow_right">{ToggleArrow}</span>} />
      </div>
      <h2>profile</h2>
      <div className="content">
        <MainBlockMob
          icon={VerificationIcon}
          header={'Account verification'}
          span={'There are 1 issue'}
          actionIcon={<span className="toggle-arrow toggle-arrow_right">{ToggleArrow}</span>} />
        <MainBlockMob
          icon={SecurityIcon}
          header={'Account security'}
          span={'No security issues'}
          actionIcon={<span className="toggle-arrow toggle-arrow_right">{ToggleArrow}</span>} />
        <MainBlockMob
          icon={SettingsIcon}
          header={'Notification setings'}
          span={'Change options'}
          actionIcon={<span className="toggle-arrow toggle-arrow_right">{ToggleArrow}</span>} />
        <MainBlockMob
          icon={GetPaidIcon}
          header={'Get paid'}
          span={'Add payout method'}
          actionIcon={<span className="toggle-arrow toggle-arrow_right">{ToggleArrow}</span>} />
        <MainBlockMob
          icon={SellerChatIcon}
          header={'Seller chat'}
          span={'Send a message'}
          actionIcon={<span className="toggle-arrow toggle-arrow_right">{ToggleArrow}</span>}
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