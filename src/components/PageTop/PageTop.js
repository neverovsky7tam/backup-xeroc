import React from 'react';
import { useSelector } from 'react-redux';
import CarouselMenu from '../MainMenu/CarouselMenu';

const PageTop = () => {
  const pageTopContent = useSelector((state) => state.pageTopState.content);
  const pageTopDisplay = useSelector((state) => state.pageTopState.isDisplay);

  let content = <CarouselMenu />;
  let cssClass = 'page-top';
  if (pageTopContent === 'auth') {
    content = '';
  }

  return (
    <>
      {pageTopDisplay && <div className={cssClass}>{content}</div>}
    </>
  );
};

export default PageTop;