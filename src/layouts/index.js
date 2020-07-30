import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDeviceType } from 'store/actions'
import Header from 'mod/Header';
import SideBar from 'mod/SideBar';
import Footer from 'mod/Footer';
import PageTop from 'mod/PageTop';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const main = React.createRef();

  const isMobile = (document.documentElement.clientWidth < 768) ? true : false;
  const isSidebar = useSelector((state) => state.sidebarState);

  if (isMobile) dispatch(setDeviceType(true));
  else dispatch(setDeviceType(false));

  useEffect(() => {
    let mainBlock = main.current;

    if (isSidebar) {
      const root = document.getElementById('root');
      root.classList.add('stop-scroll-y');
      mainBlock.style.overflow = 'hidden';

      return () => {
        root.classList.remove('stop-scroll-y');
        mainBlock.style = '';
      }
    }
  });

  return (
    <>
      <Header isMobile={isMobile} />
      {isSidebar && <SideBar />}
      <main className="main" ref={main}>
        {isMobile && <PageTop />}
        {children}
      </main>
      {!isMobile && <Footer />}
    </>
  );
};

export default Layout;