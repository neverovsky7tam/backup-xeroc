import React, { useEffect } from 'react';
import store from 'store/store';
import { saveSearchValue } from 'store/actions';
import { byTextLogic } from './textLogic';
import { setInputState } from '../Filter/logicInput';
import { setPreviuosSearch, calcPrevResult } from './logicSearch';
import { BoxDecor } from 'components/Parts/BoxDecor';

const ByText = () => {
  const inputText = React.createRef();
  const storeValue = store.getState().searchValue;

  let input = null;
  useEffect(() => {
    input = inputText.current;
    if (storeValue.text) input.value = storeValue.text;

    return () => {
      store.dispatch(saveSearchValue('text', input.value));
    }
  });

  const onInputClick = (e) => {
    e.target.focus();
    setPreviuosSearch();
  };

  const onInputChange = (e) => {
    setInputState(e);
    byTextLogic(e);
  };

  const onInputKey = (e) => {
    if (e.key === 'Backspace') calcPrevResult();
  }

  return (
    <div className="by-text p-relative">
      <div className="p-relative">
        <div className="filter__select input-holder">
          <input
            type="text"
            placeholder="Search"
            data-type="text"
            onClick={onInputClick}
            onChange={onInputChange}
            onKeyUp={onInputKey}
            ref={inputText} />
        </div>
        <BoxDecor />
      </div>
    </div>
  )
};

export default ByText;