import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHeaderNavbarCssClass, setFooterState, setPageTopContent } from 'store/actions';
import PageCloseBtn from 'components/BlocksUI/Buttons/PageCloseBtn';
import { TermsEN } from './TermsEN';

const Terms = () => {
  const isMobile = useSelector((state) => state.deviceType);

  const scrollBox = React.createRef();
  const gradientBlock = React.createRef();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHeaderNavbarCssClass('header__navbar header__navbar_terms'));
    dispatch(setFooterState('footer-mini'));
    dispatch(setPageTopContent('privacy policy'));
    return () => {
      dispatch(setHeaderNavbarCssClass('header__navbar'));
      dispatch(setFooterState('footer-standart'));
      dispatch(setPageTopContent(null));
    };
  });

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
  };

  return (
    <div className="terms-wrapper">
      <section className="terms">
        <div className="terms__inner">
          <div className="terms__header">
            <h2>privacy policy</h2>
          </div>
          <div className="terms-body">
            <div
              className={isMobile ? 'scroll-container w-100' : 'scroll-container'}
              ref={scrollBox}
              onScroll={calcScrollTop}>
              <TermsEN />
            </div>
            <div className="terms__footer-gradient" ref={gradientBlock}></div>
          </div>
        </div>
        {isMobile && <PageCloseBtn cssClass="terms__close-btn" path={'/sign-up'} />}
      </section>
    </div>
  );
};

export default Terms;