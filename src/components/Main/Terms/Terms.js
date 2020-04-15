import React from 'react';
import { TermsEN } from './TermsEN';

const Terms = () => {
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
    <section className="terms">
      <div className="terms__header">
        <h2>privacy policy</h2>
      </div>
      <div
        className="terms-inner scroll-container"
        ref={scrollBox}
        onScroll={calcScrollTop}>
        <TermsEN />
      </div>
      <div className="terms__footer-gradient" ref={gradientBlock}></div>
    </section>
  )
}

export default Terms;