import React from 'react';
import { useDispatch } from 'react-redux';
import { TermsEN } from './TermsEN';
import { setMainContent } from '../../../store/actions';
import { ReactComponent as CloseCross } from '../../../assets/img/close-cross.svg';

const Terms = () => {
  const scrollBox = React.createRef();
  const gradientBlock = React.createRef();
  const dispatch = useDispatch();

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
    <section className="terms">
      <div className="terms__header">
        <h2>privacy policy</h2>
      </div>
      <div className="terms-body">
        <div
          className="scroll-container"
          ref={scrollBox}
          onScroll={calcScrollTop}>
          <TermsEN />
        </div>
        <div className="terms__footer-gradient" ref={gradientBlock}></div>
        <div
          className="terms__close-btn"
          onClick={() => dispatch(setMainContent('sign-up'))}>
          <CloseCross />
        </div>
      </div>
    </section>
  )
}

export default Terms;