import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDeviceType } from 'store/actions'
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import TermsCloseBtn from 'pages/Terms/modules/TermsCloseBtn';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const isMobile = (document.documentElement.clientWidth < 768) ? true : false;

  if (isMobile) dispatch(setDeviceType(true));
  else dispatch(setDeviceType(false));

  const termsCloseBtn = useSelector((state) => state.termsCloseBtn);

  return (
    <>
      <Header isMobile={isMobile} />
      <main className="main">
        {children}
      </main>
      {!isMobile && <Footer footerState={(termsCloseBtn) ? 'footer-mini' : 'footer-standart'} />}
      {termsCloseBtn && <TermsCloseBtn />}
    </>
  );
};

export default Layout;