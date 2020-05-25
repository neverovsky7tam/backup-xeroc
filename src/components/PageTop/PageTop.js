import React from 'react';
import { useSelector } from 'react-redux';
import CarouselMenu from '../MainMenu/CarouselMenu';

const PageTop = () => {
  const pageTopContent = useSelector((state) => state.pageTopState.content);
  const pageTopDisplay = useSelector((state) => state.pageTopState.isDisplay);
  const pageTopAdditionCssClass = useSelector((state) => state.pageTopState.additionCssClass);

  let content = <CarouselMenu />;

  const cssClass = (pageTopAdditionCssClass) ? `page-top ${pageTopAdditionCssClass}` : 'page-top';

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