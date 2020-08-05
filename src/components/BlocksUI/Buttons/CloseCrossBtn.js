import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import store from 'store/store';
import { setSidebarState, setCartState, setCloseCrossRight } from 'store/actions';
import { CloseCross } from 'svg/svg';

const CloseCrossBtn = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const isSidebar = store.getState().sidebarState;
  const isCartShow = store.getState().cartState;

  const closeAction = () => {
    if (isSidebar) {
      dispatch(setSidebarState(false));
      if (history.location.pathname === '/log-in' || history.location.pathname === '/sign-up') {
        dispatch(setCloseCrossRight(true));
      }
    } else if (isCartShow) {
      dispatch(setCartState(false));
    } else {
      // if (setState().type === 'SET_CLOSE_CROSS_RIGHT') history.push('/');
      // else history.goBack();
      history.push('/');
    }
  };

  return (
    <button
      className="controls-btn controls-btn_close"
      onClick={closeAction}>
      {CloseCross}
    </button>
  );
};

export default CloseCrossBtn;