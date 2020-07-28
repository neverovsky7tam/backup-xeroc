import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import store from 'store/store';
import { setSidebarState, setCloseCross } from 'store/actions';
import { CloseCross } from 'svg/svg';

const CloseCrossBtn = () => {
  const dispatch = useDispatch();
  const isSidebar = store.getState().sidebarState;

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