import React from 'react';
import { useSelector } from 'react-redux';
import CarouselMenu from '../MainMenu/CarouselMenu';

const PageTop = () => {
  const pageTopContent = useSelector((state) => state.pageTopState.content);
  // const pageTopDisplay = useSelector((state) => state.pageTopState.isDisplay);
  const pageTopAdditionCssClass = useSelector((state) => state.pageTopState.additionCssClass);

  let content = <CarouselMenu />;
  // if (pageTopContent === null)
  const cssClass = (pageTopAdditionCssClass) ? `page-top ${pageTopAdditionCssClass}` : 'page-top';

  return <div className={cssClass}>{content}</div>;
};

export default PageTop;