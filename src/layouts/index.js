import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from 'mod/Header';
import SideBar from 'mod/SideBar';
import Footer from 'mod/Footer';
import PageTop from 'mod/PageTop';

const Layout = ({ children, isMobile }) => {
  const main = React.createRef();

  const isSidebar = useSelector((state) => state.sidebarState);

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