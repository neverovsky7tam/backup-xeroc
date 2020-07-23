import React from 'react';
import { BoxDecor } from 'components/Parts/BoxDecor';
import { UserIcon } from 'svg/svgHeader';
import { ArrowDropdownMenu } from 'svg/svg';

const Account = ({ onHover }) => {
  const accountPop = React.createRef();

  const handleClick = (e) => {
    e.preventDefault()
  };

  return (
    <div
      className="user-menu__account d-flex align-items-center p-relative"
      onMouseEnter={() => onHover(accountPop, 'block')}>
      {UserIcon}
      <span className="user-menu__my-account line-height-8">my account</span>
      <div className="cursor-pointer d-flex">{ArrowDropdownMenu}</div>
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
  );
};

export default Account;