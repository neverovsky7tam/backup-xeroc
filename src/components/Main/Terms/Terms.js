import React from 'react';
import { useDispatch } from 'react-redux';
import { mainContent } from '../../../store/actions';
import { TermsEN } from './TermsEN';
import { ReactComponent as CloseCross } from '../../../assets/img/close-cross.svg';

const Terms = () => {
  const dispatch = useDispatch();
  const scrollBox = React.createRef();
  const gradientBlock = React.createRef();

  const calcScrollTop = () => {
    const elem = scrollBox.current;

    const hideContentHeight = elem.scrollHeight - elem.offsetHeight;
    const scrolledContent = hideContentHeight - elem.scrollTop;

    if (scrolledContent < 50) {
      if (scrolledContent < 5) {
        gradientBlock.current.style.display = 'none';
      } else {
        gradientBlock.current.style.display = '';
      }
    }
  }

  return (
    <div className="terms-wrapper">
      <section className="terms">
        <div
          className="terms-inner scroll-container"
          ref={scrollBox}
          onScroll={calcScrollTop}>
          <TermsEN />
        </div>
        <div className="terms__footer-gradient" ref={gradientBlock}></div>
      </section>
      <div
        className="terms__close-btn cursor-pointer"
        onClick={() => dispatch(mainContent('sign-up'))}>
        <CloseCross />
      </div>
    </div>
  )
}

export default Terms;