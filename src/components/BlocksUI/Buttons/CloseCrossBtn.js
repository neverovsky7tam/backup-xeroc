import React from 'react';
// import store from '../../../store/store';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setSidebarState, setCloseCross } from 'store/actions';
import { CloseCross } from 'svg/svg';

const CloseCrossBtn = ({ isSidebar }) => {
  const dispatch = useDispatch();

  const closeAction = () => {
    if (isSidebar) dispatch(setSidebarState(false));
    else {
      return (
        <Link to="/" />
      )
      // const pageStore = store.getState().generalBlockContent.store;
      // console.log('pageStore', pageStore);
      // const prevPage = pageStore[1];
      // dispatch(setGeneralBlockContent('home'));
    }
    dispatch(setCloseCross(false));
  };

  return (
    <button className="controls-btn controls-btn_close">
      <span onClick={closeAction}>{CloseCross}</span>
    </button>
  );
};

export default CloseCrossBtn;