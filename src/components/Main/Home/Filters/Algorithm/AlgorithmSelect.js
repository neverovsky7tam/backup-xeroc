import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { expandFilter } from '../logicFilters';
import { renderTags, deleteTag } from '../logicInput';
import { ReactComponent as ArrowDots } from '../../../../../assets/img/arrow-dots.svg';

const AlgorithmSelect = ({ isExpand, setExpandFilter }) => {
  const filter = React.createRef();
  const input = React.createRef();

  const userSelect = useSelector((state) => state.filtersState);

  let storeTags = null;
  let tags = null;
  if (userSelect.algorithm) storeTags = userSelect.algorithm.tag;

  if (storeTags) {
    tags = renderTags(storeTags);
  }

  useLayoutEffect(() => {
    const elementsInField = filter.current.children[0].childNodes.length;
    if (elementsInField > 1) filter.current.classList.add('filter__select_expand');

    if (storeTags) {
      if (userSelect.algorithm.tag.length) {
        filter.current.classList.add('filter__select_active');
        input.current.placeholder = '';
        input.current.value = '';
        input.current.focus();
        input.current.maxLength = 5;
      }
      else {
        filter.current.classList.remove('filter__select_active');
        input.current.placeholder = 'By Algorithm';
        input.current.maxLength = 10;
      }
    }
  });


  let inputValue = null;
  const onInputChange = (e) => {
    // console.log('onChange', e.target.value);
    inputValue = e.target.value;
  };

  const onInputKey = (e) => {
    if ((tags && tags.length) && (e.key === 'Backspace' && !e.target.value)) {
      deleteTag('algorithm');
    }
  };



  return (
    <div
      className="filter__select"
      onClick={(e) => expandFilter(e, isExpand, setExpandFilter)}
      ref={filter}>
      <div className="select-wrapper">
        {tags}
        <input
          ref={input}
          onChange={onInputChange}
          onKeyDown={onInputKey}
          type="text"
          placeholder="By Algorithm"
          maxLength="10" />
      </div>
      <div className="arrow">
        <ArrowDots />
      </div>
    </div>
  )
};

export default AlgorithmSelect;
