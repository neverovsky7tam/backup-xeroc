import React from 'react';
import { BoxDecor } from '../../Parts/BoxDecor';
import { ReactComponent as UserIcon } from '../../../assets/img/Header/user.svg';
import { ReactComponent as ArrowDropdownMenu } from '../../../assets/img/arrow-dropdown-menu.svg';

const Account = ({ onHover }) => {
  const accountPop = React.createRef();

  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <div
      className="user-menu__account d-flex align-items-center p-relative"
      onMouseEnter={() => onHover(accountPop, 'block')}>
      <UserIcon />
      <span className="user-menu__my-account line-height-8">my account</span>
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
  )
}

export default Account;