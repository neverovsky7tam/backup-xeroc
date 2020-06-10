import React  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNotificationsData } from '../../../store/actions';
import { RollingBlock } from '../../BlocksUI/RollingBlock';
import { MainBlockMob } from '../../BlocksUI/MainBlockMob';
import { ButtonMain } from '../../BlocksUI/Buttons/ButtonMain';
import { ReactComponent as StartIcon } from '../../../assets/img/SideBar/star.svg';
import { ReactComponent as ArrowBackIcon } from '../../../assets/img/SideBar/arrow-back.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/img/delete.svg';
import { ReactComponent as NotificationEmptyIcon } from '../../../assets/img/SideBar/notification-empty.svg';

export const NotificationsContent = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notificationsData);

  const toggleBlock = (rollingBlock, decor) => {
    decor.current.children[0].classList.toggle('d-none');
    decor.current.children[2].classList.toggle('d-none');

    const block = rollingBlock.current;
    const arrowHolder = block.firstElementChild.lastElementChild.firstElementChild;

    if (!+block.dataset.state) {
      const toLeft = block.lastElementChild.offsetWidth;
      block.style.right = `${toLeft}px`;
      block.firstElementChild.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      block.firstElementChild.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
      arrowHolder.style.transform = 'rotate(180deg)';
      block.dataset.state = 1;
    } else {
      block.style = '';
      block.firstElementChild.style = '';
      arrowHolder.style = '';
      block.dataset.state = 0;
    }
  };

  const deleteBlock = (rollingBlock) => {
    const elementID = +rollingBlock.current.dataset.id;
    const newArr = notifications.filter((el) => el.id !== elementID);
    dispatch(setNotificationsData(newArr));
  }

  let notificationElements = (
    <MainBlockMob
      icon={<NotificationEmptyIcon />}
      header={'There are no notifications'}
      span={'Check the settings below'}
      styleInner={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.1)' }} />
  );

  if (notifications.length) {
    notificationElements = notifications.map((el) => {
      const rollingBlock = React.createRef();
      const decor = React.createRef();

      return (
        <RollingBlock
          key={el.id}
          id={el.id}
          ref={{ rollingBlock, decor }}
          icon={<StartIcon />}
          header={'You have 1 new feedback'}
          span={el.val}
          actionIcon={<ArrowBackIcon className="notification-arrow"/>}
          hideIcon={<DeleteIcon className="notification-delete" />}
          toggleBlock={() => toggleBlock(rollingBlock, decor)}
          deleteBlock={() => deleteBlock(rollingBlock)} />
      );
    });
  }

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
  const notifications = useSelector((state) => state.notificationsData);
  const btnState = (notifications.length) ? true : false;

  const dispatch = useDispatch();

  const clearAll = () => {
    dispatch(setNotificationsData([]));
  };

  return (
    <div className={btnState && 'grid-template-2fr'}>
      {btnState && <ButtonMain
        text={'Clear all'}
        func={clearAll} />}
      <ButtonMain
        text={'Settings'} />
    </div>
  );
};