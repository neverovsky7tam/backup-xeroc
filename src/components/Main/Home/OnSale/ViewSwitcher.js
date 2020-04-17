import React, { useEffect } from 'react';
import { ReactComponent as DotsIcon } from './img/3-vert-dot.svg';
import { ReactComponent as ViewIcon } from './img/view-icon.svg';

const ViewSwitcher = ({ view, setView }) => {
  const viewIcon = React.createRef();
  const dotsIcon = React.createRef();

  useEffect(() => {
    if (view) {
      dotsIcon.current.lastChild.style.fill = '#dadada';
      viewIcon.current.lastChild.style.fill = '';
    } else {
      viewIcon.current.lastChild.style.fill = '#dadada';
      dotsIcon.current.lastChild.style.fill = '';
    }
  });


  const viewState = (view) ? 'Grid' : 'Release list';

  return (
    <div className="view-switcher" onClick={() => setView(!view)}>
      <div className="view-switcher__active">
        <span className="view-switcher__active-title">View:</span>
        <button>{viewState}</button>
      </div>
      <ViewIcon className="view-switcher__icon" ref={viewIcon} />
      <DotsIcon className="view-switcher__icon" ref={dotsIcon} />
    </div>
  )
}

export default ViewSwitcher;