import React from 'react';
import { RollingBlock } from '../../BlocksUI/RollingBlock';
import { ButtonMain } from '../../BlocksUI/Buttons/ButtonMain';
import { ReactComponent as StartIcon } from '../../../assets/img/SideBar/star.svg';
import { ReactComponent as ArrowBackIcon } from '../../../assets/img/SideBar/arrow-back.svg';

export const NotificationsContent = () => {

  const moveToLeft = (block) => {
    console.log('block', block.current);
  }

  const notificationItems = ['10 mins ago', '2 days ago', '1 months ago', '2 months ago', '3 months ago'];
  const notificationElements = notificationItems.map((el) => {
    const block = React.createRef();
    return (
      <RollingBlock
        ref={block}
        icon={<StartIcon />}
        header={'You have 1 new feedback'}
        span={el}
        actionIcon={<ArrowBackIcon />}
        func={() => moveToLeft(block)} />
    );
  });

  return (
    <>
      <h2>notifications</h2>
      <div className="content">
        {notificationElements}
      </div>
    </>
  );
};

export const NotificationsBtn = () => {

  return (
    <div className="grid-template-2fr">
      <ButtonMain
        text={'Clear all'} />
      <ButtonMain
        text={'Settings'} />
    </div>
  );
};