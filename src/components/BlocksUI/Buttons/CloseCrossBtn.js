import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setSidebarState, setCloseCross } from 'store/actions';
import { CloseCross } from 'svg/svg';

const CloseCrossBtn = ({ isSidebar }) => {
  const dispatch = useDispatch();

  const closeAction = () => {
    if (isSidebar) dispatch(setSidebarState(false));
    dispatch(setCloseCross(false));
  };

  return (
    <button
      className="controls-btn controls-btn_close"
      onClick={closeAction}>
      <Link to="/">
        {CloseCross}
      </Link>
    </button>
  );
};

export default CloseCrossBtn;