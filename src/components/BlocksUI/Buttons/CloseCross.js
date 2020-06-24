import React from 'react';
import store from '../../../store/store';
import { useDispatch } from 'react-redux';
import { setSidebarState, setCloseCross, setGeneralBlockState } from '../../../store/actions';
import { ReactComponent as CloseCrossIcon } from '../../../assets/img/Header/close-cross.svg';

const CloseCross = ({ isSidebar }) => {
  const dispatch = useDispatch();

  const closeAction = () => {
    if (isSidebar) dispatch(setSidebarState(false));
    else {
      const pageStore = store.getState().generalBlockState.store;
      const prevPage = pageStore[1];
      dispatch(setGeneralBlockState(prevPage));
    }
    dispatch(setCloseCross(false));
  };

  return (
    <button className="controls-btn controls-btn_close">
      <CloseCrossIcon onClick={closeAction} />
    </button>
  );
};

export default CloseCross;