import React from 'react';
import { Link } from "react-router-dom";
import { CloseCross } from 'svg/svg';

const PageCloseBtn = ({ cssClass, path }) => {
  return (
    <div className={cssClass}>
      <Link to={path}>{CloseCross}</Link>
    </div>
  );
};

export default PageCloseBtn;