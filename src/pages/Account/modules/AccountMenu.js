import React from 'react';

const AccountMenu = React.forwardRef((props, items) => {
  return (
    <nav className="main-menu__wrapper">
      <ul className="main-menu__items" ref={items}>
        <li data-link="/log-in">log in</li>
        <li data-link="/sign-up">sign up</li>
      </ul>
    </nav>
  );
});

export default AccountMenu;