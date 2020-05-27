import React from 'react';
import { MainBlockMob } from '../../BlocksUI/MainBlockMob';
import { ButtonMain } from '../../BlocksUI/Buttons/ButtonMain';
import { ReactComponent as Arrow } from '../../../assets/img/SideBar/arrow-white-right.svg';
import { ReactComponent as SellIcon } from '../../../assets/img/SideBar/Account/sell-icon.svg';
import { ReactComponent as SellHistoryIcon } from '../../../assets/img/SideBar/Account/sell-history.svg';
import { ReactComponent as HistoryIcon } from '../../../assets/img/SideBar/Account/history.svg';
import { ReactComponent as ReportIcon } from '../../../assets/img/SideBar/Account/report.svg';

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
    </>
  );
};

export const AccountBtn = () => {
  return (
    <ButtonMain 
      text={'Log out'} />
  );
};