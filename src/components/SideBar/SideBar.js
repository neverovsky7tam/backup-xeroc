import React from 'react';
import { ReactComponent as FiltersIcon } from '../../assets/img/Header/controls-mob.svg';

const SideBar = () => {
  return (
    <section className="sidebar">
      <nav className="sidebar__nav">
        <ul className="sidebar__nav-inner">
          <li className="sidebar__nav-item">
            <FiltersIcon />
          </li>
        </ul>
      </nav>
      <div className="sidebar__content">
        <div className="sidebar__content-inner">

        </div>
      </div>
    </section>
  )
};

export default SideBar;
