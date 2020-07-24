import React from 'react';
import { useDispatch } from 'react-redux';
import { setDeviceType } from 'store/actions'
import Header from 'mod/Header';
import Footer from 'mod/Footer';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const isMobile = (document.documentElement.clientWidth < 768) ? true : false;

  if (isMobile) dispatch(setDeviceType(true));
  else dispatch(setDeviceType(false));

  return (
    <>
      <Header isMobile={isMobile} />
      <main className="main">
        {children}
      </main>
      {!isMobile && <Footer />}
    </>
  );
};

export default Layout;